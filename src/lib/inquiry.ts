export type InquiryState = {
  ok: boolean;
  errors: Partial<Record<string, string>>;
  values: Record<string, string | string[]>;
};

export const SERVICE_OPTIONS = [
  "Event hosting",
  "Voice over",
  "Voice acting",
  "Advertising",
  "Songs",
  "Something else",
];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiry(form: FormData, today: Date): InquiryState {
  const get = (k: string) => String(form.get(k) ?? "").trim();
  const values = {
    name: get("name"),
    email: get("email"),
    phone: get("phone"),
    talent: get("talent"),
    services: form.getAll("services").map(String),
    date: get("date"),
    place: get("place"),
    details: get("details"),
  };
  const errors: InquiryState["errors"] = {};

  if (!values.name) errors.name = "Please enter your name.";
  if (!values.email && !values.phone) errors.contact = "Add an email or a phone / Messenger number so we can reach you.";
  if (values.email && !EMAIL.test(values.email)) errors.email = "Enter an email such as name@example.com.";
  if (values.services.length === 0) errors.services = "Pick at least one thing you need.";
  if (values.date) {
    const d = new Date(values.date + "T00:00:00");
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (Number.isNaN(d.getTime())) errors.date = "Please pick a valid date.";
    else if (d < start) errors.date = "That date has already passed.";
  }
  if (values.details.length > 2000) errors.details = "Please keep this under 2,000 characters.";

  return { ok: Object.keys(errors).length === 0, errors, values };
}
