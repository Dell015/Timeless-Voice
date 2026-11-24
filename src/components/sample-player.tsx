"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function SamplePlayer({ name, src }: { name: string; src?: string }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const pauseOther = (event: Event) => { if (event.target !== audio.current) audio.current?.pause(); };
    document.addEventListener("play", pauseOther, true);
    return () => document.removeEventListener("play", pauseOther, true);
  }, []);
  if (!src || failed) {
    return <Link href="/#work" className="text-link">{failed ? "Audio unavailable · Read scripts" : "Read sample scripts"} <span aria-hidden="true">↗</span></Link>;
  }
  return <audio ref={audio} controls preload="none" aria-label={name + " voice sample"} src={src} onError={() => setFailed(true)} className="max-w-full" />;
}
