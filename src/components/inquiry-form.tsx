"use client";

import Link from "next/link";
import { useActionState } from "react";
import { submitInquiry } from "@/app/plan/actions";
import { initialInquiryState, SERVICE_OPTIONS } from "@/lib/inquiry";

const field =
  "mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-subtle aria-[invalid=true]:border-accent";

function Err({ id, msg }: { id: string; msg?: string }) {
  return msg ? (
    <p id={id} role="alert" className="mt-2 text-sm text-accent">
      {msg}
    </p>
  ) : null;
}

export function InquiryForm({ talents }: { talents: { slug: string; name: string }[] }) {
  const [state, action, pending] = useActionState(submitInquiry, initialInquiryState);
  const { errors, values } = state;
  const v = (k: string) => (typeof values[k] === "string" ? (values[k] as string) : "");
  const chosen = Array.isArray(values.services) ? values.services : [];

  if (state.ok) {
    return (
      <div role="status" className="rounded-3xl border border-line bg-surface p-8">
        <h2 className="font-display text-3xl">Got it. Thank you.</h2>
        <p className="mt-3 text-muted">We&rsquo;ll get back to you soon about your event.</p>
        <Link href="/" className="btn mt-6">Back to home</Link>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-8">
      {/* Spam trap, hidden from people */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="font-semibold">Your name</label>
        <input id="name" name="name" autoComplete="name" defaultValue={v("name")} required
          aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} className={field} />
        <Err id="name-err" msg={errors.name} />
      </div>

      <fieldset aria-describedby={errors.contact ? "contact-err" : undefined}>
        <legend className="font-semibold">How can we reach you?</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="text-sm text-muted">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" defaultValue={v("email")}
              aria-invalid={!!errors.email || !!errors.contact} aria-describedby={errors.email ? "email-err" : undefined} className={field} />
            <Err id="email-err" msg={errors.email} />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm text-muted">Phone or Messenger</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" defaultValue={v("phone")}
              aria-invalid={!!errors.contact} className={field} />
          </div>
        </div>
        <Err id="contact-err" msg={errors.contact} />
      </fieldset>

      <fieldset aria-describedby={errors.services ? "services-err" : undefined}>
        <legend className="font-semibold">What do you need?</legend>
        <div className="mt-3 flex flex-wrap gap-3">
          {SERVICE_OPTIONS.map((s) => (
            <label key={s} className="cursor-pointer">
              <input type="checkbox" name="services" value={s} defaultChecked={chosen.includes(s)} className="peer sr-only" />
              <span className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-muted transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-bg peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                {s}
              </span>
            </label>
          ))}
        </div>
        <Err id="services-err" msg={errors.services} />
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="talent" className="font-semibold">Who would you like?</label>
          <select id="talent" name="talent" defaultValue={v("talent")} className={field}>
            <option value="">Help me choose</option>
            {talents.map((t) => <option key={t.slug} value={t.slug}>{t.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="font-semibold">Event date <span className="font-normal text-subtle">(if known)</span></label>
          <input id="date" name="date" type="date" defaultValue={v("date")}
            aria-invalid={!!errors.date} aria-describedby={errors.date ? "date-err" : undefined} className={field} />
          <Err id="date-err" msg={errors.date} />
        </div>
      </div>

      <div>
        <label htmlFor="place" className="font-semibold">Where is it? <span className="font-normal text-subtle">(town or venue)</span></label>
        <input id="place" name="place" defaultValue={v("place")} className={field} />
      </div>

      <div>
        <label htmlFor="details" className="font-semibold">Anything else we should know?</label>
        <textarea id="details" name="details" rows={5} defaultValue={v("details")}
          aria-invalid={!!errors.details} aria-describedby={errors.details ? "details-err" : undefined} className={field} />
        <Err id="details-err" msg={errors.details} />
      </div>

      <div>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="consent" value="yes" defaultChecked={!!v("consent")}
            aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-err" : undefined}
            className="mt-1 h-5 w-5 accent-[var(--accent)]" />
          <span className="text-muted">
            I agree that my details can be used to reply to this inquiry. See the{" "}
            <Link href="/privacy" className="underline underline-offset-4">privacy page</Link>.
          </span>
        </label>
        <Err id="consent-err" msg={errors.consent} />
      </div>

      <button type="submit" disabled={pending} className="btn disabled:opacity-60">
        {pending ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
