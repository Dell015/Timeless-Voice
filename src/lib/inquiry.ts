export type InquiryState = {
  ok: boolean;
  errors: Partial<Record<string, string>>;
  values: Record<string, string | string[]>;
};

export const initialInquiryState: InquiryState = { ok: false, errors: {}, values: {} };

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
    consent: get("consent"),
  };
  const errors: InquiryState["errors"] = {};

  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!values.email && !values.phone) errors.contact = "Add an email or a phone / Messenger number so we can reach you.";
  if (values.email && !EMAIL.test(values.email)) errors.email = "That email doesn't look right.";
  if (values.services.length === 0) errors.services = "Pick at least one thing you need.";
  if (values.date) {
    const d = new Date(values.date + "T00:00:00");
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (Number.isNaN(d.getTime())) errors.date = "Please pick a valid date.";
    else if (d < start) errors.date = "That date has already passed.";
  }
  if (values.details.length > 2000) errors.details = "Please keep this under 2,000 characters.";
  if (!values.consent) errors.consent = "Please agree so we can use your details to reply.";

  return { ok: Object.keys(errors).length === 0, errors, values };
}

/**
 * TODO(supabase): save the inquiry and notify the talent.
 * Until the database exists this does nothing, so nothing a visitor types is stored.
 */
export async function saveInquiry(_values: InquiryState["values"]): Promise<void> {
  void _values;
}
