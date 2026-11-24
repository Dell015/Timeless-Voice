import Link from "next/link";
import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-8">
        <Link href="/" aria-label="Timeless Voices home"><Brand /></Link>
        <p className="text-sm text-muted">Tuguegarao, Philippines</p>
        <nav aria-label="Footer" className="flex gap-5 text-sm"><Link className="ulink py-2" href="/plan">Event planner</Link><Link className="ulink py-2" href="/privacy">Privacy</Link></nav>
      </div>
    </footer>
  );
}
