"use client";

import { useEffect, useId, useRef, useState } from "react";

const HEIGHTS = [10, 18, 26, 14, 30, 22, 12, 28, 20, 34, 16, 24, 30, 12, 22, 32, 18, 26];

/** One sample plays at a time: starting one pauses any other. Never autoplays. */
export function SamplePlayer({ name, src, size = "md" }: { name: string; src?: string; size?: "md" | "lg" }) {
  const id = useId();
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const onOther = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== id) audio.current?.pause();
    };
    window.addEventListener("tv-sample-play", onOther);
    return () => window.removeEventListener("tv-sample-play", onOther);
  }, [id]);

  function toggle() {
    const a = audio.current;
    if (!a) return;
    if (a.paused) {
      window.dispatchEvent(new CustomEvent("tv-sample-play", { detail: id }));
      void a.play();
    } else a.pause();
  }

  const dim = size === "lg" ? "h-16 w-16" : "h-12 w-12";
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={toggle}
        disabled={!src}
        aria-label={`${playing ? "Pause" : "Play"} ${name}'s sample`}
        className={`${dim} inline-flex shrink-0 items-center justify-center rounded-full bg-btn text-btn-ink transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0`}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          {playing ? (
            <>
              <rect x="4" y="3" width="4" height="14" />
              <rect x="12" y="3" width="4" height="14" />
            </>
          ) : (
            <path d="M5 3.5v13l11-6.5z" />
          )}
        </svg>
      </button>
      <div className="flex h-8 items-center gap-[3px]" aria-hidden="true">
        {HEIGHTS.slice(0, 14).map((h, i) => (
          <span
            key={i}
            className={`w-[3px] origin-center rounded-full ${playing ? "bg-accent" : "bg-line"}`}
            style={{
              height: h,
              animation: playing ? `bar 900ms ease-in-out ${(i * 67) % 500}ms infinite` : undefined,
            }}
          />
        ))}
      </div>
      {!src && <span className="text-xs text-subtle">Sample coming soon</span>}
      {src && (
        <audio
          ref={audio}
          src={src}
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
      )}
    </div>
  );
}
