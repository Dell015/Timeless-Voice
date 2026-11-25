"use client";

import { SendBrief } from "./send-brief";
import { useSearchParams } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import { SERVICE_OPTIONS, validateInquiry } from "@/lib/inquiry";
import { localDateKey } from "@/lib/calendar";

const field = "mt-1 w-full rounded-lg border px-3 py-2.5 text-ink";
const label = "block font-semibold";
type TalentOption = { slug: string; name: string };

export function InquiryForm({ talents, canSend }: { talents: TalentOption[]; canSend: boolean }) {
  const query = useSearchParams();
  const talent = talents.find(t => t.slug === query.get("talent"));
  const date = query.get("date") || "";
  const initialDate = /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : "";
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [prepared, setPrepared] = useState<{ id: string; values: Record<string, string | string[]> } | null>(null);
  const [brief, setBrief] = useState("");
  const [notice, setNotice] = useState("");
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const errorSummary = useRef<HTMLDivElement>(null);

  function error(id: string) {
    return errors[id] ? <p className="field-error" id={id + "-err"}>{errors[id]}</p> : null;
  }
  function accessibility(id: string) {
    return { "aria-invalid": !!errors[id], "aria-describedby": errors[id] ? id + "-err" : undefined };
  }
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = validateInquiry(form, new Date());
    setErrors(result.errors);
    if (!result.ok) {
      requestAnimationFrame(() => errorSummary.current?.focus());
      return;
    }
    const v = result.values;
    const chosen = talents.find(t => t.slug === v.talent)?.name || "Help me choose";
    const lines = [
      "Timeless Voices — Booking brief", "",
      "Name: " + v.name, v.email && "Email: " + v.email, v.phone && "Phone or Messenger: " + v.phone,
      "Service: " + (v.services as string[]).join(", "), "Talent: " + chosen,
      "Date: " + (v.date || "To be decided"), v.place && "Location: " + v.place,
      v.details && "Project notes: " + v.details,
    ];
    if (canSend) setPrepared({ id: crypto.randomUUID(), values: result.values });
    setBrief(lines.filter((line, i) => line || i === 1).join("\n"));
    setNotice("");
    requestAnimationFrame(() => resultHeading.current?.focus());
  }
  function download() {
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "timeless-voices-booking-brief.txt";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <div className="form-paper">
      {brief && <section>
        <h2 ref={resultHeading} tabIndex={-1} className="font-display text-3xl">Your brief is ready</h2>
        <p className="mt-2 text-muted">Download or copy this draft and share it with your talent. Your date still needs confirmation.</p>
        <pre className="my-5 whitespace-pre-wrap wrap-anywhere rounded-lg bg-surface p-4 font-sans text-sm">{brief}</pre>
        {canSend && prepared && <SendBrief id={prepared.id} values={prepared.values} key={prepared.id} />}
        <div className="brief-actions flex flex-wrap items-center gap-4">
          <button type="button" className="btn" onClick={download}>Download brief</button>
          <button type="button" className="text-link" onClick={async () => {
            try { await navigator.clipboard.writeText(brief); setNotice("Brief copied."); }
            catch { setNotice("Select the brief above to copy it, or use Download brief."); }
          }}>Copy text</button>
          <button type="button" className="text-link" onClick={() => { setBrief(""); requestAnimationFrame(() => formRef.current?.querySelector("input")?.focus()); }}>Edit brief</button>
        </div>
        <p role="status" className="mt-2 text-sm">{notice}</p>
      </section>}
      <form ref={formRef} hidden={!!brief} noValidate onSubmit={prepare} className="space-y-6">
        <h2 className="font-display text-3xl">Your booking brief</h2>
        {Object.keys(errors).length > 0 && <div tabIndex={-1} ref={errorSummary} className="rounded-lg border border-line p-3">
          <p className="font-semibold">Check the highlighted details</p>
          <ul className="list-disc pl-5 text-sm">{Object.entries(errors).map(([key,msg]) =>
            <li key={key}><a className="underline" href={"#" + (key === "contact" ? "email" : key)}>{msg}</a></li>)}</ul>
        </div>}
        <div><label htmlFor="name" className={label}>Your name</label>
          <input id="name" name="name" maxLength={150} autoComplete="name" required className={field} {...accessibility("name")} />{error("name")}</div>
        <fieldset>
          <legend className={label}>Contact details</legend>
          <p id="contact-help" className="mb-2 text-sm text-muted">Include at least one way for the talent to reach you.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm" htmlFor="email">Email<input id="email" name="email" maxLength={320} type="email" autoComplete="email" className={field}
              aria-invalid={!!(errors.email || errors.contact)} aria-describedby={errors.email ? "email-err" : errors.contact ? "contact-err" : "contact-help"} /></label>
            <label className="text-sm" htmlFor="phone">Phone or Messenger<input id="phone" name="phone" maxLength={150} className={field} {...accessibility("contact")} /></label>
          </div>{error("email")}{error("contact")}
        </fieldset>
        <fieldset id="services" tabIndex={-1} aria-describedby={errors.services ? "services-err" : "services-help"}>
          <legend className={label}>Services</legend>
          <p id="services-help" className="text-sm text-muted">Choose one or more.</p>
          <div className="mt-2 flex flex-wrap gap-2">{SERVICE_OPTIONS.map(s =>
            <label key={s} className="cursor-pointer"><input type="checkbox" name="services" value={s} defaultChecked={query.get("service") === s} className="peer sr-only" />
              <span className="inline-flex min-h-11 items-center rounded-full border border-[var(--control-border)] px-4 text-sm peer-checked:bg-ink peer-checked:text-bg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">{s}</span></label>)}</div>{error("services")}
        </fieldset>
        <div className="grid gap-4 sm:grid-cols-2">
          <label htmlFor="talent" className={label}>Preferred talent<select id="talent" name="talent" className={field} defaultValue={talent?.slug || ""}>
            <option value="">Help me choose</option>{talents.map(t => <option key={t.slug} value={t.slug}>{t.name}</option>)}</select></label>
          <div><label htmlFor="date" className={label}>Date <small className="font-normal text-muted">(optional)</small></label>
            <input id="date" name="date" type="date" defaultValue={initialDate} onFocus={e => { e.currentTarget.min = localDateKey(new Date()); }} className={field} {...accessibility("date")} />{error("date")}</div>
        </div>
        <label htmlFor="place" className={label}>Town or venue <small className="font-normal text-muted">(optional)</small><input id="place" name="place" maxLength={250} className={field} /></label>
        <div><label htmlFor="details" className={label}>Project notes <small className="font-normal text-muted">(optional)</small></label>
          <textarea id="details" name="details" rows={4} maxLength={2000} className={field} {...accessibility("details")} />{error("details")}</div>
        <button type="submit" className="btn">Prepare brief <span aria-hidden="true">→</span></button>
      </form>
    </div>
  );
}
