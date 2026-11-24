import Link from "next/link";

const services = [
  { title: "Event hosting", description: "An emcee for weddings, debuts, corporate programs and community gatherings.", option: "Event hosting" },
  { title: "Voice over", description: "Narration for explainers, documentaries, phone systems and short films.", option: "Voice over" },
  { title: "Voice acting", description: "Character voices for animation, games and audio drama.", option: "Voice acting" },
  { title: "Advertising & trailers", description: "Commercial reads and promos for radio, video and digital campaigns.", option: "Advertising" },
  { title: "Songs & jingles", description: "Vocals for original jingles, covers and personal projects.", option: "Songs" },
  { title: "Script writing", description: "Spoken-word scripts for spots, shows and live events.", option: "Something else" },
];

export function Services() {
  return (
    <section id="services" className="section-wash">
      <div className="wrap chapter section-split">
        <div><h2 className="display-title">Services</h2><p className="mt-4 max-w-xs text-muted">Choose a service to start your project brief.</p></div>
        <ul className="service-index">
          {services.map((s) => <li key={s.title}><Link href={`/plan?service=${encodeURIComponent(s.option)}`}>
            <div><h3>{s.title}</h3><p>{s.description}</p></div><span aria-hidden="true">↗</span>
          </Link></li>)}
        </ul>
      </div>
    </section>
  );
}
