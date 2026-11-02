import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line text-sm text-subtle">
      <div className="wrap flex flex-wrap items-center justify-between gap-4 py-8">
        <p>© Timeless Voices</p>
        <p>[Messenger] · [Viber] · [Email]</p>
        <Link href="/privacy" className="ulink">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
