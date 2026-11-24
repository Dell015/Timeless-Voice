import Image from "next/image";
import Link from "next/link";
import { talents } from "@/data/talents";

export function Voices() {
  const talent = talents[0];
  return (
    <section id="voices" className="wrap chapter">
      <div className="talent-feature">
        <div className="studio-picture"><Image src="/studio/console.webp" alt="Amber-lit meters on a recording console" fill sizes="(min-width: 800px) 44vw, 95vw" /></div>
        <div className="talent-copy">
          <p className="kicker"><span className="rule" /> Featured talent</p>
          <h2 className="display-title">{talent.name}</h2>
          <p className="mt-2 font-medium text-accent">{talent.tags.join(" · ")}</p>
          <p className="mt-4 max-w-lg text-muted">{talent.bio}</p>
          <Link className="text-link mt-6" href={`/talent/${talent.slug}`}>View profile &amp; rates <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
