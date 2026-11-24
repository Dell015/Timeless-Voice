import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { InquiryForm } from "@/components/inquiry-form";
import { talents } from "@/data/talents";

export const metadata: Metadata = { title: "Plan your event" };

export default function PlanPage() {
  return (
    <div className="wrap chapter form-grid">
      <header>
        <Link className="text-link mb-4 text-sm" href="/">← Home</Link>
        <h1 className="display-title">Plan your event</h1>
        <p className="mt-5 max-w-md text-lg text-muted">Prepare a booking brief for an event or recording. Add what you know, then save a copy to share with the talent.</p>
        <p className="mt-5 max-w-md text-sm text-muted">This planner works in your browser. A brief is a draft. Contact the talent directly to confirm availability and pricing.</p>
      </header>
      <Suspense fallback={<p>Loading planner…</p>}>
        <InquiryForm talents={talents.map(({ slug, name }) => ({ slug, name }))} />
      </Suspense>
    </div>
  );
}
