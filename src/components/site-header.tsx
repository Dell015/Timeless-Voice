import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/#voices", label: "Voices" },
  { href: "/#work", label: "Past work" },
  { href: "/#services", label: "Services" },
];

export function SiteHeader() {
  return (
    <header className="relative border-b border-line">
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="font-display text-2xl italic tracking-tight">
          Timeless Voices<span className="text-accent">.</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 text-[0.95rem] text-muted md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="ulink">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/plan" className="btn hidden md:inline-flex">
            Plan your event
          </Link>
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}
