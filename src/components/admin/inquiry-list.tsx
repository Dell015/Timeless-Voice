"use client";

import { useActionState } from "react";
import { statuses, type BookingRecord, type BookingStatus } from "@/lib/booking-record";
import { updateStatus } from "@/app/admin/actions";

function StatusControl({ row, onDemoChange }: { row: BookingRecord; onDemoChange?: (id: string, status: BookingStatus) => void }) {
  const [message, action, pending] = useActionState(updateStatus, "");
  return <form className="status-control" action={onDemoChange ? (data) => onDemoChange(row.id, data.get("status") as BookingStatus) : action}>
    <input type="hidden" name="id" value={row.id} /><input type="hidden" name="previous" value={row.status} />
    <label>Status<select name="status" defaultValue={row.status} key={row.status}>{statuses.map(status => <option key={status}>{status}</option>)}</select></label>
    <button className="btn" disabled={pending}>{pending ? "Saving…" : "Save status"}</button>
    <span role="status" className="text-sm text-muted">{message}</span>
  </form>;
}

export function InquiryList({ rows, onDemoChange }: { rows: BookingRecord[]; onDemoChange?: (id: string, status: BookingStatus) => void }) {
  if (!rows.length) return <div className="empty-inbox"><h3 className="font-display text-2xl">No inquiries here yet</h3><p className="mt-2 text-muted">Requests with this status will appear here.</p></div>;
  return <div className="inbox-list">{rows.map(row => <details key={row.id}>
    <summary><span><strong>{row.name}</strong><small>{row.services.join(" · ")}</small></span><span className="status-pill">{row.status}</span><span aria-hidden="true" className="expand">+</span></summary>
    <div className="inquiry-body"><dl>
      <div><dt>Received</dt><dd>{new Intl.DateTimeFormat("en-PH", { dateStyle: "medium", timeZone: "Asia/Manila" }).format(new Date(row.created_at))}</dd></div>
      <div><dt>Requested date</dt><dd>{row.event_date || "To be decided"}</dd></div>
      {row.email && <div><dt>Email</dt><dd>{row.email}</dd></div>}
      {row.phone && <div><dt>Phone or Messenger</dt><dd>{row.phone}</dd></div>}
      {row.place && <div><dt>Venue or town</dt><dd>{row.place}</dd></div>}
      <div><dt>Preferred talent</dt><dd>{row.talent === "sir-sander" ? "Sir Sander" : "Help me choose"}</dd></div>
    </dl>{row.details && <p className="inquiry-notes">{row.details}</p>}<StatusControl row={row} onDemoChange={onDemoChange} /></div>
  </details>)}</div>;
}
