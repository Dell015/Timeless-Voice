"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { changeStatus, signInOwner, signOutOwner } from "@/lib/studio-server";
import { isBookingStatus, uuidPattern } from "@/lib/booking-record";

export async function login(_message: string, form: FormData) {
  try {
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");
    if (!email || !password || !await signInOwner(email, password)) return "Sign-in failed. Check your studio account details.";
  } catch { return "Sign-in is temporarily unavailable. Please try again."; }
  redirect("/admin");
}

export async function logout() {
  await signOutOwner();
  redirect("/admin");
}

export async function updateStatus(_message: string, form: FormData) {
  const id = String(form.get("id") || "");
  const previous = form.get("previous");
  const status = form.get("status");
  if (!uuidPattern.test(id) || !isBookingStatus(status) || !isBookingStatus(previous)) return "Choose a valid inquiry and status.";
  try {
    const updated = await changeStatus(id, previous, status);
    revalidatePath("/admin");
    return updated ? "Status saved." : "This inquiry changed in another session. Review its current status.";
  } catch { return "Could not save. Check your session and try again."; }
}
