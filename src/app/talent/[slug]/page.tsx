import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SamplePlayer } from "@/components/sample-player";
import { peso, talents } from "@/data/talents";

export function generateStaticParams() {
  return talents.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/talent/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const t = talents.find((x) => x.slug === slug);
  return t ? { title: t.name, description: `${t.name}: ${t.tags.join(", ")}.` } : {};
}

export default async function TalentPage({ params }: PageProps<"/talent/[slug]">) {
  const { slug } = await params;
  const t = talents.find((x) => x.slug === slug);
  if (!t) notFound();

  return (
    <div className="wrap py-12 md:py-20">
      <Link href="/#voices" className="ulink text-sm text-muted">← All voices</Link>

      <header className="mt-8 grid gap-10 md:grid-cols-[320px_1fr]">
        <div className="relative aspect-[4/5] rounded-3xl border border-line bg-surface">
          <span className="absolute left-4 top-4 text-[11px] uppercase tracking-[0.14em] text-subtle">[PHOTO]</span>
        </div>
        <div className="flex flex-col justify-end">
          <ul className="mb-4 flex flex-wrap gap-2 text-sm">
            {t.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-line px-3 py-1 text-muted">{tag}</li>
            ))}
          </ul>
          <h1 className="font-display text-5xl tracking-tight md:text-7xl">{t.name}</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{t.bio}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <SamplePlayer name={t.name} size="lg" />
            <Link href="/plan" className="btn">Plan an event with {t.name.replace("Sir ", "")}</Link>
          </div>
        </div>
      </header>

      <section aria-labelledby="hosting" className="mt-20 border-t border-line pt-10">
        <h2 id="hosting" className="font-display text-3xl tracking-tight">Event hosting</h2>
        <p className="mt-4 font-display text-5xl">
          {peso(t.hosting.from)} <span className="text-xl text-muted">per hosting</span>
        </p>
        <p className="mt-3 max-w-xl text-muted">{t.hosting.note}</p>
      </section>

      <section aria-labelledby="vo" className="mt-16 border-t border-line pt-10">
        <h2 id="vo" className="font-display text-3xl tracking-tight">Voice over</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[420px] text-left">
            <caption className="sr-only">Voice over prices by duration</caption>
            <thead>
              <tr className="border-b border-line text-sm text-subtle">
                <th scope="col" className="py-3 pr-4 font-medium">Duration</th>
                <th scope="col" className="py-3 pr-4 font-medium">Voice over</th>
                <th scope="col" className="py-3 font-medium">Editing add-on</th>
              </tr>
            </thead>
            <tbody>
              {t.voRates.map((r) => (
                <tr key={r.duration} className="border-b border-line">
                  <th scope="row" className="py-3 pr-4 font-normal text-muted">{r.duration}</th>
                  <td className="py-3 pr-4 font-semibold">{peso(r.price)}</td>
                  <td className="py-3 text-muted">{r.edit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-muted">{t.voExtra.note}</p>
        <p className="mt-2 text-sm text-subtle">
          Editing means adding the background music and sound effects you want. Script writing is not included.
        </p>
        <ul className="mt-6 list-disc space-y-1 pl-5 text-muted">
          {t.voIncludes.map((i) => <li key={i}>{i}</li>)}
        </ul>
        <p className="mt-6 text-sm text-subtle">Rates are a guide and may change. Final price is confirmed when you book.</p>
      </section>
    </div>
  );
}
