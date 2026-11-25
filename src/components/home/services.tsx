import Link from "next/link";

import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="section-wash">
      <div className="wrap chapter section-split">
        <div><h2 className="display-title">Services</h2><p className="mt-4 max-w-xs text-muted">Choose a service to start your project brief.</p><Link href="/services" className="text-link mt-3">Compare rates →</Link></div>
        <ul className="service-index">
          {services.map((s) => <li key={s.title}><Link href={`/plan?service=${encodeURIComponent(s.option)}`}>
            <div><h3>{s.title}</h3><p>{s.description}</p></div><span aria-hidden="true">↗</span>
          </Link></li>)}
        </ul>
      </div>
    </section>
  );
}
