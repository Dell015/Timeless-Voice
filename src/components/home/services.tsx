const services = [
  ["Event hosting", "Weddings, debuts, corporate and community events."],
  ["Voice over", "Narration, explainers, IVR and commercials."],
  ["Voice acting", "Characters for games, animation and audio drama."],
  ["Advertising", "Radio, TV and online ad reads."],
  ["Songs", "Vocals, jingles and covers."],
  ["Trailers", "Film and product trailers."],
  ["Scripts", "Writing for spots, shows and events."],
  ["Short films", "Narration and on-screen voice."],
];

export function Services() {
  return (
    <section id="services" className="wrap scroll-mt-8 py-20 md:py-28">
      <h2 className="font-display text-4xl tracking-tight md:text-5xl">
        More than <em className="text-accent">one kind</em> of voice.
      </h2>
      <ol className="mt-12 border-t border-line">
        {services.map(([title, text]) => (
          <li
            key={title}
            className="group grid grid items-baseline gap-x-4 gap-y-1 border-b border-line py-6 transition-[padding] duration-300 hover:pl-3 md:grid-cols-[1fr_1.2fr]"
          >
            <span className="font-display text-2xl md:text-3xl">{title}</span>
            <span className="text-muted">{text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
