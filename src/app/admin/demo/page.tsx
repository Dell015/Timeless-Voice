import type { Metadata } from "next";
import Link from "next/link";
import { DemoInbox } from "@/components/admin/demo-inbox";

export const metadata: Metadata = { title: "Demo inbox", robots: { index: false, follow: false } };

export default function DemoPage() {
  return <div className="wrap chapter"><div className="studio-shell">
    <header className="page-intro"><Link className="text-link text-sm" href="/admin">← Studio access</Link><h1 className="display-title">Demo inbox</h1>
      <p>Explore two fictional inquiries. Changes last until you leave or refresh this page.</p></header>
    <DemoInbox />
  </div></div>;
}
