import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { connection } from "next/server";
import { LoginForm } from "@/components/admin/login-form";
import { InquiryList } from "@/components/admin/inquiry-list";
import { isBookingStatus, statuses, type BookingStatus } from "@/lib/booking-record";
import { readInbox, signedInOwner, studioConnected } from "@/lib/studio-server";
import { logout } from "./actions";

export const metadata: Metadata = { title: "Sander’s studio", robots: { index: false, follow: false } };

function inboxLink(status: BookingStatus | null, page = 1) {
  const params = new URLSearchParams();
  if (status) params.set("status", status);
  if (page > 1) params.set("page", String(page));
  return params.size ? "/admin?" + params : "/admin";
}

async function Studio({ searchParams }: PageProps<"/admin">) {
  await connection();
  const connected = studioConnected();
  let owner = false;
  try { owner = connected && await signedInOwner(); }
  catch { return <p role="status">Studio access is temporarily unavailable. <Link className="text-link" href="/admin">Try again</Link></p>; }
  if (!owner) return <div className="studio-access">
    <header className="page-intro"><h1 className="display-title">Sander’s studio</h1><p>Review incoming booking briefs and follow up with clients.</p></header>
    <section className="form-paper"><h2 className="mb-4 font-display text-3xl">{connected ? "Studio sign-in" : "Studio preview"}</h2>
      {connected ? <LoginForm /> : <p className="mb-4 text-muted">The live inbox is awaiting setup. Explore the sample inbox to try the review workflow.</p>}
      <Link href="/admin/demo" className="text-link">Explore demo inbox <span aria-hidden="true">→</span></Link>
    </section>
  </div>;
  const query = await searchParams;
  const status = isBookingStatus(query.status) ? query.status : null;
  const current = Number(query.page || 1);
  const page = Number.isSafeInteger(current) && current > 0 && current <= 100000 ? current : 1;
  let inbox;
  try { inbox = await readInbox(status, page); } catch { inbox = null; }
  return <div className="studio-shell"><header className="inbox-head"><div className="page-intro"><h1 className="display-title">Booking inbox</h1><p>Review client briefs and track your follow-up.</p></div>
    <form action={logout}><button className="text-link">Sign out</button></form></header>
    <nav className="inbox-filters" aria-label="Filter inquiries">{([null, ...statuses] as const).map(s => <Link key={s || "All"} href={inboxLink(s)} aria-current={s === status ? "page" : undefined}>{s || "All"}</Link>)}</nav>
    {inbox ? <><InquiryList rows={inbox.rows} /><nav className="flex gap-5" aria-label="Inbox pages">
      {page > 1 && <Link className="text-link" href={inboxLink(status, page - 1)}>← Previous</Link>}
      {inbox.hasNext && <Link className="text-link" href={inboxLink(status, page + 1)}>Next →</Link>}</nav></>
      : <p role="status">The inbox could not load. <Link className="text-link" href={inboxLink(status, page)}>Try again</Link></p>}
  </div>;
}

export default function AdminPage(props: PageProps<"/admin">) {
  return <div className="wrap chapter"><Suspense fallback={<p>Opening studio…</p>}><Studio {...props} /></Suspense></div>;
}
