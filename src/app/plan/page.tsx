import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { InquiryForm } from "@/components/inquiry-form";
import { connection } from "next/server";
import { studioConnected } from "@/lib/studio-server";
import { talents } from "@/data/talents";

export const metadata: Metadata = { title: "Plan your event" };

async function ConnectedPlanner() {
  await connection();
  return <InquiryForm canSend={studioConnected()} talents={talents.map(({ slug, name }) => ({ slug, name }))} />;
}

export default function PlanPage() {
  return (
    <div className="wrap chapter form-grid">
      <header>
        <Link className="text-link mb-4 text-sm" href="/">← Home</Link>
        <h1 className="display-title">Plan your event</h1>
        <p className="mt-5 max-w-md text-lg text-muted">Prepare a booking brief for an event or recording. Add what you know, then save a copy to share with the talent.</p>
        <p className="mt-5 max-w-md text-sm text-muted">Your brief is a draft. Sander confirms the final schedule and price with you.</p>
      </header>
      <Suspense fallback={<p>Loading planner…</p>}>
        <ConnectedPlanner />
      </Suspense>
    </div>
  );
}
