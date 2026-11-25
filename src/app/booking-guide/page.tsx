import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Booking guide", description: "What to prepare for a live event or recording, how to check a date and what goes into your quote." };

const questions = [
  ["Can I start without a date or venue?", "Yes. Leave those fields blank in the planner. An approximate month, town or venue shortlist in your notes is enough to start a conversation."],
  ["Does choosing a date reserve it?", "Choosing a date adds it to your brief. Arrange the final schedule directly with Sander before you make commitments."],
  ["What should I include for a live event?", "Share the occasion, venue or town, audience size and expected program length. Mention any language preferences, introductions or special segments."],
  ["What should I include for a recording?", "Include the script length, intended audience, preferred tone, deadline and where the recording will be used. Note any music or sound effects you need."],
  ["What does the voice-over rate include?", "Voice enhancement and up to two revisions to the original script are included in Sander’s listed voice-over rates. Discuss script changes, music and effects when requesting a quote."],
];

export default function BookingGuidePage() {
  return <div className="wrap chapter">
    <header className="page-intro"><Link href="/" className="text-link text-sm">← Home</Link>
      <h1 className="display-title">Booking guide</h1><p>From choosing a voice to confirming the details with Sander.</p>
    </header>
    <div className="section-split">
      <section aria-labelledby="start"><h2 id="start" className="font-display text-3xl">How booking works</h2>
        <ol className="booking-steps">
          <li><strong>Choose your service</strong><p>Compare hosting and recording options. <Link href="/services">Explore services and rates</Link></p></li>
          <li><strong>Prepare your brief</strong><p>Tell Sander about your audience, timing and preferred style. <Link href="/plan">Open the planner</Link></p></li>
          <li><strong>Confirm the details</strong><p>Agree on your scope, schedule and final quote with Sander before the event or recording.</p></li>
        </ol>
      </section>
      <section aria-labelledby="faq"><h2 id="faq" className="mb-5 font-display text-3xl">Common questions</h2>
        <div className="script-list guide-questions">{questions.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden="true" className="expand">+</span></summary><p>{a}</p></details>)}</div>
        <Link href="/talent/sir-sander#avail" className="text-link mt-4">Check Sander’s calendar <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  </div>;
}
