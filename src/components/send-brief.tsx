"use client";

import { useActionState } from "react";
import Link from "next/link";
import { sendInquiry } from "@/app/plan/send-inquiry";

export function SendBrief({ id, values }: { id: string; values: Record<string, string | string[]> }) {
  const [state, action, pending] = useActionState(sendInquiry, { sent: false, message: "" });
  return <div className="delivery-panel">
    {state.sent ? <p role="status">{state.message}</p> : <form action={action}>
      <input type="hidden" name="request_id" value={id} />
      {Object.entries(values).flatMap(([name, value]) => (Array.isArray(value) ? value : [value]).map(item => <input type="hidden" key={name + item} name={name} value={item} />))}
      <h3 className="font-display text-2xl">Send to Sander</h3>
      <label className="my-3 flex items-start gap-2"><input className="mt-1.5" type="checkbox" name="consent" value="yes" required /><span>I agree to share this brief and my contact details with Sander for this inquiry.</span></label>
      <div className="flex flex-wrap items-center gap-4"><button className="btn" disabled={pending}>{pending ? "Sending…" : "Send inquiry"}</button><Link className="text-link" href="/privacy" target="_blank" rel="noopener noreferrer">Privacy <span className="sr-only">(opens in a new tab)</span></Link></div>
      <p role="status" className="mt-2 text-sm">{state.message}</p>
    </form>}
  </div>;
}
