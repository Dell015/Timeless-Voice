import Link from "next/link";
import { SamplePlayer } from "../sample-player";

export function Hero() {
  return (
    <section className="wrap grid items-center gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
      <div>
        <h1 className="rise font-display text-5xl leading-[1.02] tracking-tight [animation-delay:80ms] md:text-7xl">
          Hand-picked voices. <em className="text-accent">Book the one that fits.</em>
        </h1>
        <p className="rise mt-6 max-w-lg text-lg text-muted [animation-delay:160ms]">
          Hosts and voice talent for weddings, debuts, corporate events and productions. Press play, then plan your
          event in a few minutes.
        </p>
        <div className="rise mt-8 flex flex-wrap items-center gap-4 [animation-delay:240ms]">
          <Link href="/plan" className="btn">Plan your event</Link>
          <Link href="/#voices" className="ulink py-2 font-semibold">Meet the voices</Link>
        </div>
      </div>
      <div className="rise relative [animation-delay:200ms]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface">
          <span className="absolute left-4 top-4 text-[11px] uppercase tracking-[0.14em] text-subtle">[PHOTO]</span>
        </div>
        <div className="absolute inset-x-4 -bottom-6 rounded-2xl border border-line bg-bg p-4 shadow-lg shadow-black/10">
          <p className="mb-3 text-sm text-muted">Sir Sander · Event host · sample</p>
          <SamplePlayer name="Sir Sander" size="lg" />
        </div>
      </div>
    </section>
  );
}
