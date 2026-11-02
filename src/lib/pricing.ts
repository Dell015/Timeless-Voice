import type { Talent } from "@/data/talents";

export type HostingZone = "tuguegarao" | "nearby" | "other";

export type Estimate =
  | { kind: "price"; total: number; lines: { label: string; amount: number }[] }
  | { kind: "ask"; reason: string };

export function hostingEstimate(t: Talent, zone: HostingZone): Estimate {
  if (zone === "other") {
    return { kind: "ask", reason: "Events beyond Cagayan and Isabela are priced case by case. Send an inquiry for a quote." };
  }
  const lines = [{ label: "Hosting (usually 3 to 4 hours)", amount: t.hosting.from }];
  if (zone === "nearby") lines.push({ label: "Outside Tuguegarao, within Cagayan or Isabela", amount: t.hosting.outsideExtra });
  return { kind: "price", total: lines.reduce((a, l) => a + l.amount, 0), lines };
}

/** seconds: length of the finished voice over. Past the last tier, the per-minute rate applies to each started minute. */
export function voEstimate(t: Talent, seconds: number, withEditing: boolean): Estimate {
  if (!Number.isFinite(seconds) || seconds <= 0) return { kind: "ask", reason: "Enter the length of your script's voice over." };
  const rows = t.voRates;
  const last = rows[rows.length - 1];
  let price: number;
  let edit: number;
  if (seconds <= last.maxSeconds) {
    const row = rows.find((r) => seconds <= r.maxSeconds)!;
    price = row.price;
    edit = row.edit;
  } else {
    const extraMinutes = Math.ceil((seconds - last.maxSeconds) / 60);
    price = last.price + extraMinutes * t.voExtra.perMinute;
    edit = last.edit + extraMinutes * t.voExtra.editPerMinute;
  }
  const lines = [{ label: "Voice over", amount: price }];
  if (withEditing) lines.push({ label: "Editing (music and sound effects)", amount: edit });
  return { kind: "price", total: lines.reduce((a, l) => a + l.amount, 0), lines };
}
