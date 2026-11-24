"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

export function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    function outside(event: Event) {
      if (event.target instanceof Node && !panel.current?.contains(event.target)) setOpen(false);
    }
    const desktop = matchMedia("(min-width: 64rem)");
    const close = () => setOpen(false);
    desktop.addEventListener("change", close);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", outside);
    document.addEventListener("focusin", outside);
    return () => {
      desktop.removeEventListener("change", close);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("focusin", outside);
    };
  }, [open]);

  return (
    <div ref={panel} className="lg:hidden">
      <button ref={trigger} type="button" aria-expanded={open} aria-controls={id} aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-line">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d={open ? "M5 5l14 14M19 5L5 19" : "M3 8h18M3 16h18"} />
        </svg>
      </button>
      <nav id={id} aria-label="Mobile" hidden={!open} className="mobile-panel">
        <ul className="wrap py-4">
          {links.map((link) => <li key={link.href}><Link href={link.href} onClick={() => setOpen(false)} className="block border-b border-line py-3 text-lg">{link.label}</Link></li>)}
          <li><Link href="/plan" onClick={() => setOpen(false)} className="btn mt-4">Plan your event ↗</Link></li>
        </ul>
      </nav>
    </div>
  );
}
