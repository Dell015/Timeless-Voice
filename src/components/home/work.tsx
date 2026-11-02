export function Work() {
  return (
    <section id="work" className="wrap scroll-mt-8 py-20 md:py-28">
      <h2 className="font-display text-4xl tracking-tight md:text-5xl">Past work</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="rounded-2xl border border-line bg-surface p-6">
            <div className="aspect-video rounded-xl border border-line bg-bg" />
            <p className="mt-4 text-sm text-subtle">[Event or project {n}]</p>
          </div>
        ))}
      </div>
      <figure className="mt-12 max-w-2xl border-l-2 border-accent pl-6">
        <blockquote className="font-display text-2xl italic leading-snug">
          “[Client testimonial goes here.]”
        </blockquote>
        <figcaption className="mt-3 text-sm text-subtle">[Client name, event]</figcaption>
      </figure>
    </section>
  );
}
