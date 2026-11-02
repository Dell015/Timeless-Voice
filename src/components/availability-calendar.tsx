"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { dateKey, monthGrid } from "@/lib/calendar";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MAX_AHEAD = 12;

const noop = () => () => {};
const todayNow = () => {
  const d = new Date();
  return dateKey(d.getFullYear(), d.getMonth(), d.getDate());
};

export function AvailabilityCalendar({ name, booked }: { name: string; booked: string[] }) {
  // Empty on the server, the visitor's local date once in the browser: no hydration mismatch.
  const today = useSyncExternalStore(noop, todayNow, () => "");
  const [offset, setOffset] = useState(0);

  if (!today) {
    return <section aria-labelledby="avail" className="mt-20 min-h-80 border-t border-line pt-10"><h2 id="avail" className="font-display text-3xl tracking-tight">Availability</h2></section>;
  }

  const [ty, tm] = today.split("-").map(Number);
  const base = new Date(ty, tm - 1 + offset, 1);
  const y = base.getFullYear();
  const m = base.getMonth();
  const label = base.toLocaleDateString("en-PH", { month: "long", year: "numeric" });
  const bookedSet = new Set(booked);

  return (
    <section aria-labelledby="avail" className="mt-20 border-t border-line pt-10">
      <h2 id="avail" className="font-display text-3xl tracking-tight">Availability</h2>
      <p className="mt-2 max-w-xl text-muted">
        Dates marked taken are already booked. Free dates are not a guarantee, so send an inquiry to hold yours.
      </p>

      <div className="mt-6 max-w-md">
        <div className="mb-3 flex items-center justify-between">
          <button type="button" aria-label="Previous month" disabled={offset <= 0} onClick={() => setOffset((o) => o - 1)}
            className="h-11 w-11 rounded-full border border-line disabled:opacity-40">←</button>
          <p aria-live="polite" className="font-display text-xl">{label}</p>
          <button type="button" aria-label="Next month" disabled={offset >= MAX_AHEAD} onClick={() => setOffset((o) => o + 1)}
            className="h-11 w-11 rounded-full border border-line disabled:opacity-40">→</button>
        </div>
        <table className="w-full table-fixed border-collapse text-center">
          <caption className="sr-only">{name}&rsquo;s availability for {label}</caption>
          <thead>
            <tr>{DAYS.map((d) => <th key={d} scope="col" className="pb-2 text-xs font-medium text-subtle">{d}</th>)}</tr>
          </thead>
          <tbody>
            {monthGrid(y, m).map((week, i) => (
              <tr key={i}>
                {week.map((day, j) => {
                  if (!day) return <td key={j} />;
                  const key = dateKey(y, m, day);
                  const past = key < today;
                  const taken = bookedSet.has(key);
                  const state = past ? "past" : taken ? "taken" : "free";
                  return (
                    <td key={j} className="p-0.5">
                      <span
                        aria-label={`${new Date(y, m, day).toLocaleDateString("en-PH", { month: "long", day: "numeric" })}, ${state === "free" ? "free" : state === "taken" ? "taken" : "past"}`}
                        className={`flex h-11 items-center justify-center rounded-lg text-sm ${
                          state === "taken" ? "bg-ink text-bg line-through" : state === "past" ? "text-subtle opacity-60" : "border border-line text-ink"
                        } ${key === today ? "ring-1 ring-accent" : ""}`}
                      >
                        {day}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded border border-line" /> Free</span>
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded bg-ink" /> Taken</span>
        </div>
        <Link href="/plan" className="btn mt-6">Ask about a date</Link>
      </div>
    </section>
  );
}
