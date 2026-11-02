"use client";

import { useState } from "react";
import type { Talent } from "@/data/talents";
import { type HostingZone, hostingEstimate, voEstimate } from "@/lib/pricing";
import { peso } from "@/data/talents";

const field = "mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink";

export function EstimateCalculator({ talent }: { talent: Talent }) {
  const [mode, setMode] = useState<"hosting" | "vo">("hosting");
  const [zone, setZone] = useState<HostingZone>("tuguegarao");
  const [min, setMin] = useState("1");
  const [sec, setSec] = useState("0");
  const [editing, setEditing] = useState(false);

  const seconds = Math.max(0, Number(min) || 0) * 60 + Math.max(0, Number(sec) || 0);
  const est = mode === "hosting" ? hostingEstimate(talent, zone) : voEstimate(talent, seconds, editing);

  return (
    <section aria-labelledby="estimate" className="mt-20 rounded-3xl border border-line bg-surface p-6 md:p-8">
      <h2 id="estimate" className="font-display text-3xl tracking-tight">Estimate your cost</h2>
      <p className="mt-2 text-muted">A quick guide. The final price is confirmed when you book.</p>

      <div role="group" aria-label="Service" className="mt-6 flex gap-3">
        {(["hosting", "vo"] as const).map((m) => (
          <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)}
            className="min-h-11 rounded-full border border-line px-5 text-muted transition-colors aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-bg">
            {m === "hosting" ? "Event hosting" : "Voice over"}
          </button>
        ))}
      </div>

      <div className="mt-6 max-w-md">
        {mode === "hosting" ? (
          <div>
            <label htmlFor="zone" className="font-semibold">Where is the event?</label>
            <select id="zone" value={zone} onChange={(e) => setZone(e.target.value as HostingZone)} className={field}>
              <option value="tuguegarao">Tuguegarao</option>
              <option value="nearby">Elsewhere in Cagayan or Isabela</option>
              <option value="other">Somewhere else</option>
            </select>
          </div>
        ) : (
          <div className="space-y-5">
            <fieldset>
              <legend className="font-semibold">Length of the voice over</legend>
              <div className="flex gap-3">
                <label className="flex-1 text-sm text-muted">Minutes
                  <input type="number" inputMode="numeric" min={0} max={60} value={min} onChange={(e) => setMin(e.target.value)} className={field} />
                </label>
                <label className="flex-1 text-sm text-muted">Seconds
                  <input type="number" inputMode="numeric" min={0} max={59} value={sec} onChange={(e) => setSec(e.target.value)} className={field} />
                </label>
              </div>
            </fieldset>
            <label className="flex items-center gap-3">
              <input type="checkbox" checked={editing} onChange={(e) => setEditing(e.target.checked)} className="h-5 w-5 accent-[var(--accent)]" />
              <span className="text-muted">Add background music and sound effects</span>
            </label>
          </div>
        )}
      </div>

      <div role="status" aria-live="polite" className="mt-8 border-t border-line pt-6">
        {est.kind === "ask" ? (
          <p className="text-muted">{est.reason}</p>
        ) : (
          <>
            <ul className="space-y-1 text-muted">
              {est.lines.map((l) => (
                <li key={l.label} className="flex justify-between gap-4">
                  <span>{l.label}</span>
                  <span>{peso(l.amount)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-baseline justify-between gap-4 font-display text-4xl">
              <span className="text-xl">Estimate</span>
              <span>{peso(est.total)}</span>
            </p>
          </>
        )}
      </div>
    </section>
  );
}
