import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy" };

const sections: [string, string][] = [
  ["What we collect", "When you send an inquiry or plan an event, we collect the details you enter: your name, contact details, event date and place, and what you need. [Confirm the final list of fields.]"],
  ["Why we collect it", "To pass your request to the talent you chose, reply to you, and arrange your booking. We do not use it for anything unrelated."],
  ["Who sees it", "The talent you contacted and the site team. We do not sell your details. [Confirm service providers, such as hosting and email.]"],
  ["How long we keep it", "[Decide a retention period.] You can ask us to correct or delete your details at any time."],
  ["Cookies and analytics", "[Describe analytics and advertising pixels once chosen. Ask for consent before using them.]"],
  ["Contact", "[Email or Messenger for privacy requests.]"],
];

export default function PrivacyPage() {
  return (
    <div className="wrap max-w-3xl py-16 md:py-24">
      <h1 className="font-display text-5xl tracking-tight">Privacy</h1>
      <p className="mt-4 rounded-xl border border-line bg-surface p-4 text-sm text-muted">
        Draft for review. This is a plain-language starting point, not legal advice. It should be checked against the
        Philippine Data Privacy Act before launch.
      </p>
      {sections.map(([h, p]) => (
        <section key={h} className="mt-10">
          <h2 className="font-display text-2xl">{h}</h2>
          <p className="mt-3 text-muted">{p}</p>
        </section>
      ))}
    </div>
  );
}
