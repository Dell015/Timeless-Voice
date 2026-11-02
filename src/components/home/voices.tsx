import Link from "next/link";
import { SamplePlayer } from "../sample-player";

export function Voices() {
  return (
    <section id="voices" className="wrap scroll-mt-8 py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl tracking-tight md:text-5xl">The voices</h2>
        <p className="text-muted">Every voice is hand-picked.</p>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-[2fr_1fr]">
        <article className="grid gap-6 rounded-3xl border border-line bg-surface p-6 sm:grid-cols-[220px_1fr] md:p-8">
          <div className="relative aspect-[4/5] rounded-2xl border border-line bg-bg sm:aspect-auto sm:min-h-[280px]">
            <span className="absolute left-3 top-3 text-[11px] uppercase tracking-[0.14em] text-subtle">[PHOTO]</span>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h3 className="font-display text-4xl tracking-tight">Sir Sander</h3>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                {["Event host", "Voice over"].map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 text-muted">{t}</li>
                ))}
              </ul>
              <p className="mt-4 text-muted">Hosting from ₱10,000</p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <SamplePlayer name="Sir Sander" />
              <Link href="/talent/sir-sander" className="btn">View profile</Link>
            </div>
          </div>
        </article>
        <aside
          id="waitlist"
          className="flex min-h-56 scroll-mt-8 flex-col justify-between rounded-3xl border border-dashed border-line p-6 md:p-8"
        >
          <p className="font-display text-3xl leading-tight tracking-tight">More voices joining soon.</p>
          <div>
            <p className="mb-4 text-muted">New hand-picked talent will appear here as they join.</p>
            <Link href="/plan" className="ulink font-semibold text-accent">Join the waitlist</Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
