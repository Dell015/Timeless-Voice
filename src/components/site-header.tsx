import Link from "next/link";
import { Brand } from "./brand";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/#voices", label: "The talent" },
  { href: "/services", label: "Services & rates" },
  { href: "/booking-guide", label: "Booking guide" },
  { href: "/#work", label: "Sample scripts" },
];

export function SiteHeader() {
  return (
    <header className="masthead">
      <div className="wrap flex items-center justify-between gap-3">
        <Link href="/" aria-label="Timeless Voices home"><Brand /></Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className="ulink py-3">{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/plan" className="btn header-plan">Plan your event <span aria-hidden="true">↗</span></Link>
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}
