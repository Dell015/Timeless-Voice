import "server-only";
import { cookies } from "next/headers";
import type { BookingRecord, BookingStatus } from "./booking-record";

const sessionName = "tv-studio-session";
const endpoint = () => process.env.SUPABASE_URL?.replace(/\/+$/, "");
const publicKey = () => process.env.SUPABASE_PUBLISHABLE_KEY;
const secretKey = () => process.env.SUPABASE_SECRET_KEY;
const owner = () => process.env.SANDER_ADMIN_USER_ID;

export function studioConnected() {
  return Boolean(endpoint() && publicKey() && secretKey() && owner());
}

function provider(path: string, key: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("apikey", key);
  headers.set("Content-Type", "application/json");
  if (!headers.has("Authorization") && key.startsWith("eyJ")) headers.set("Authorization", "Bearer " + key);
  return fetch(endpoint() + path, { ...init, headers, cache: "no-store", signal: AbortSignal.timeout(10000) });
}

export async function signInOwner(email: string, password: string) {
  if (!studioConnected()) return false;
  const response = await provider("/auth/v1/token?grant_type=password", publicKey()!, {
    method: "POST", body: JSON.stringify({ email, password }),
  });
  if (!response.ok) return false;
  const session = await response.json();
  if (session.user?.id !== owner() || !session.access_token) return false;
  (await cookies()).set(sessionName, session.access_token, {
    httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production",
    path: "/", maxAge: Math.min(Number(session.expires_in) || 3600, 3600),
  });
  return true;
}

export async function signedInOwner() {
  if (!studioConnected()) return false;
  const token = (await cookies()).get(sessionName)?.value;
  if (!token) return false;
  const response = await provider("/auth/v1/user", publicKey()!, { headers: { Authorization: "Bearer " + token } });
  if (response.status === 401 || response.status === 403) return false;
  if (!response.ok) throw new Error("Studio authentication is temporarily unavailable.");
  return (await response.json()).id === owner();
}

export async function signOutOwner() {
  const jar = await cookies();
  const token = jar.get(sessionName)?.value;
  jar.delete(sessionName);
  if (token && studioConnected()) await provider("/auth/v1/logout?scope=local", publicKey()!, {
    method: "POST", headers: { Authorization: "Bearer " + token },
  }).catch(() => undefined);
}

async function ownerRequest(query: URLSearchParams, init?: RequestInit) {
  if (!await signedInOwner()) throw new Error("Sign in to access the studio.");
  const response = await provider("/rest/v1/booking_inquiries?" + query, secretKey()!, init);
  if (!response.ok) throw new Error("The inbox is temporarily unavailable.");
  return response;
}

export async function readInbox(status: BookingStatus | null, page: number) {
  const query = new URLSearchParams({ select: "*", order: "created_at.desc,id.desc", limit: "21", offset: String((page - 1) * 20) });
  if (status) query.set("status", "eq." + status);
  const records: BookingRecord[] = await (await ownerRequest(query)).json();
  return { rows: records.slice(0, 20), hasNext: records.length > 20 };
}

export async function changeStatus(id: string, previous: BookingStatus, status: BookingStatus) {
  const query = new URLSearchParams({ id: "eq." + id, status: "eq." + previous, select: "id" });
  const response = await ownerRequest(query, { method: "PATCH", headers: { Prefer: "return=representation" }, body: JSON.stringify({ status }) });
  return (await response.json()).length === 1;
}

export async function storeInquiry(row: Omit<BookingRecord, "status" | "created_at">) {
  if (!studioConnected()) throw new Error("Online inquiries are unavailable.");
  const response = await provider("/rest/v1/booking_inquiries?on_conflict=id", secretKey()!, {
    method: "POST", headers: { Prefer: "resolution=ignore-duplicates,return=minimal" }, body: JSON.stringify(row),
  });
  if (!response.ok) throw new Error("The inquiry could not be saved.");
}
