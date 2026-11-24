"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { dateKey, localDateKey, monthGrid } from "@/lib/calendar";

const subscribe = () => () => {};
const todayKey = () => localDateKey(new Date());
const serverToday = () => "";
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function AvailabilityCalendar({ name, slug, booked }: { name: string; slug: string; booked: string[] }) {
  const today = useSyncExternalStore(subscribe, todayKey, serverToday);
  const [offset, setOffset] = useState(0);
  const bookings = new Set(booked);
  const [year, month] = today.split("-").map(Number);
  const first = new Date(year, month - 1 + offset, 1);
  const label = first.toLocaleDateString("en-PH", { month: "long", year: "numeric" });
  const dateLabel = (date: Date) => date.toLocaleDateString("en-PH", { month: "long", day: "numeric", year: "numeric" });
  return (
    <section className="tool-card" aria-labelledby="avail">
      <h2 id="avail" className="font-display text-3xl tracking-tight">Check a date</h2>
      <p className="mt-2 text-muted">Choose a date to add it to your brief. {name} will need to confirm availability.</p>
      {today && <>
        <div className="mt-5 mb-3 flex items-center justify-between">
          <button type="button" aria-label="Previous month" disabled={offset === 0} onClick={() => setOffset(offset - 1)} className="h-11 w-11 rounded-full border border-line disabled:opacity-40">←</button>
          <p aria-live="polite" className="font-display text-xl">{label}</p>
          <button type="button" aria-label="Next month" disabled={offset === 12} onClick={() => setOffset(offset + 1)} className="h-11 w-11 rounded-full border border-line disabled:opacity-40">→</button>
        </div>
        <table className="w-full table-fixed text-center text-sm">
          <caption className="sr-only">{name}’s calendar for {label}</caption>
          <thead><tr>{weekdays.map(d => <th key={d} scope="col" className="pb-2 text-xs text-muted">{d}</th>)}</tr></thead>
          <tbody>{monthGrid(first.getFullYear(), first.getMonth()).map((week, i) => <tr key={i}>
            {week.map((day, j) => {
              if (!day) return <td key={j} />;
              const key = dateKey(first.getFullYear(), first.getMonth(), day);
              const taken = bookings.has(key);
              const full = dateLabel(new Date(first.getFullYear(), first.getMonth(), day));
              return <td key={j} className="p-0.5">{key < today || taken
                ? <span className={taken ? "line-through text-muted" : "text-subtle"}>{day}<span className="sr-only">{taken ? " booked" : " past"}</span></span>
                : <Link href={`/plan?talent=${slug}&date=${key}`} aria-label={"Plan with " + name + " on " + full} aria-current={key === today ? "date" : undefined}
                    className="grid min-h-10 place-items-center rounded-md border border-line bg-bg hover:border-accent aria-[current=date]:border-accent">{day}</Link>}
              </td>;
            })}
          </tr>)}</tbody>
        </table>
      </>}
      <Link className="text-link mt-3 text-sm" href={`/plan?talent=${slug}`}>Plan without a date <span aria-hidden="true">→</span></Link>
    </section>
  );
}
