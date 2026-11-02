import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { talents } from "@/data/talents";

export const metadata: Metadata = { title: "Plan your event" };

export default function PlanPage() {
  return (
    <div className="wrap max-w-3xl py-12 md:py-20">
      <h1 className="font-display text-5xl tracking-tight md:text-6xl">Plan your event</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Tell us what you have in mind. It takes about two minutes, and you don&rsquo;t need every detail yet.
      </p>
      <div className="mt-12">
        <InquiryForm talents={talents.map(({ slug, name }) => ({ slug, name }))} />
      </div>
    </div>
  );
}
