import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <article className="wrap chapter">
      <div className="max-w-2xl">
        <Link href="/" className="text-link mb-4 text-sm">← Home</Link>
        <h1 className="display-title">Privacy</h1>
        <h2 className="mt-9 font-display text-3xl">Your booking brief</h2>
        <p className="mt-3 text-muted">The planner uses the details you enter to prepare a draft in your browser. Downloading saves a text file on your device. Copying places the draft on your clipboard. If you choose Send inquiry, the site stores your brief and contact details in the studio’s Supabase inbox for Sander to review and follow up. Preparing or downloading a draft keeps those details in your browser.</p>
        <h2 className="mt-9 font-display text-3xl">Your preferences</h2>
        <p className="mt-3 text-muted">When you choose light or dark mode, the site stores that choice in your browser. You can remove it by clearing the site’s browser data.</p>
      </div>
    </article>
  );
}
