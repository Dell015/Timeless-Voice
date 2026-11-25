"use client";

import { useState } from "react";
import { statuses, type BookingRecord, type BookingStatus } from "@/lib/booking-record";
import { InquiryList } from "./inquiry-list";

const examples: BookingRecord[] = [
  { id: "demo-wedding", created_at: "2026-11-20T03:00:00Z", status: "New", name: "Sample wedding couple", services: ["Event hosting"], email: "couple@example.com", phone: "", talent: "sir-sander", event_date: null, place: "Tuguegarao", details: "An evening reception for 80 guests. We would like help introducing the wedding party." },
  { id: "demo-narration", created_at: "2026-11-18T01:30:00Z", status: "In review", name: "Sample production team", services: ["Voice over"], email: "producer@example.com", phone: "", talent: "sir-sander", event_date: null, place: "", details: "A 90-second documentary introduction with a calm, conversational read." },
];

export function DemoInbox() {
  const [rows, setRows] = useState(examples);
  const [filter, setFilter] = useState<BookingStatus | "All">("All");
  const [notice, setNotice] = useState("");
  return <>
    <div className="inbox-filters" role="group" aria-label="Filter example inquiries">{(["All", ...statuses] as const).map(s =>
      <button type="button" key={s} aria-pressed={filter === s} onClick={() => setFilter(s)}>{s}</button>)}</div>
    <InquiryList rows={rows.filter(r => filter === "All" || r.status === filter)} onDemoChange={(id, status) => {
      setRows(old => old.map(r => r.id === id ? { ...r, status } : r)); setNotice("Example status saved for this visit.");
    }} />
    <p role="status" className="mt-3 text-sm text-muted">{notice}</p>
  </>;
}
