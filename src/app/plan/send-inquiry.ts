"use server";

import { uuidPattern } from "@/lib/booking-record";
import { SERVICE_OPTIONS, validateInquiry } from "@/lib/inquiry";
import { talents } from "@/data/talents";
import { storeInquiry } from "@/lib/studio-server";

export async function sendInquiry(_state: { sent: boolean; message: string }, form: FormData) {
  const invalid = { sent: false, message: "Edit your brief and check the contact, date and service details." };
  const id = String(form.get("request_id") || "");
  if (!uuidPattern.test(id)) return invalid;
  if (form.get("consent") !== "yes") return { sent: false, message: "Allow Sander to receive your details before sending." };
  const parsed = validateInquiry(form, new Date());
  if (!parsed.ok) return invalid;
  const str = (key: string) => String(parsed.values[key] || "");
  const services = [...new Set(parsed.values.services as string[])];
  const talent = str("talent");
  if (services.some(service => !SERVICE_OPTIONS.includes(service)) ||
      (talent && !talents.some(t => t.slug === talent)) ||
      str("name").length > 150 || str("email").length > 320 || str("phone").length > 150 || str("place").length > 250) return invalid;
  try {
    await storeInquiry({ id, name: str("name"), email: str("email"), phone: str("phone"), services, talent,
      event_date: str("date") || null, place: str("place"), details: str("details") });
    return { sent: true, message: "Your inquiry reached Sander’s studio. Sander can use the contact details in your brief to follow up." };
  } catch {
    return { sent: false, message: "Delivery could not be confirmed. Try again or download your brief." };
  }
}
