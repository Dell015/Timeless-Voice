"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

export function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 8h16M4 16h16" />}
        </svg>
      </button>
      {open && (
        <nav id={id} aria-label="Mobile" className="absolute inset-x-0 top-full border-b border-line bg-bg">
          <ul className="wrap flex flex-col py-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-3 font-display text-2xl">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link href="/plan" onClick={() => setOpen(false)} className="btn w-full">
                Plan your event
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
