import type { Metadata } from "next";
import Link from "next/link";
import { EstimateCalculator } from "@/components/estimate-calculator";
import { peso, talents } from "@/data/talents";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Services & rates", description: "Compare event hosting and voice-over rates, estimate your project and choose a service." };

export default function ServicesPage() {
  const sander = talents[0];
  return <div className="wrap chapter">
    <header className="page-intro"><Link href="/" className="text-link text-sm">← Home</Link>
      <h1 className="display-title">Services &amp; rates</h1>
      <p>Find the right service and estimate a starting budget with {sander.name}.</p>
    </header>
    <div className="service-layout">
      <section aria-labelledby="rates">
        <h2 id="rates" className="font-display text-3xl">Starting rates</h2>
        <dl className="rate-lines">
          <div><dt>Event hosting</dt><dd>From {peso(sander.hosting.from)}</dd><dd>{sander.hosting.note}</dd></div>
          <div><dt>Voice over</dt><dd>From {peso(sander.voRates[0].price)}</dd><dd>Up to {sander.voRates[0].maxSeconds} seconds. Music and sound editing start at {peso(sander.voRates[0].edit)} extra.</dd></div>
        </dl>
        <Link className="text-link" href="/talent/sir-sander#vo">See the full rate sheet <span aria-hidden="true">→</span></Link>
      </section>
      <EstimateCalculator talent={sander} />
    </div>
    <section className="mt-14 section-split" aria-labelledby="choose"><div><h2 id="choose" className="font-display text-3xl">Choose a service</h2><p className="mt-3 text-muted">Start a brief with your service selected.</p></div>
      <ul className="service-index">{services.map(s => <li key={s.title}><Link href={`/plan?service=${encodeURIComponent(s.option)}`}><div><h3>{s.title}</h3><p>{s.description}</p></div><span aria-hidden="true">↗</span></Link></li>)}</ul>
    </section>
  </div>;
}
