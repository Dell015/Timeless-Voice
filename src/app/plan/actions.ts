"use server";

import { type InquiryState, saveInquiry, validateInquiry } from "@/lib/inquiry";

export async function submitInquiry(_prev: InquiryState, form: FormData): Promise<InquiryState> {
  // Spam trap: real visitors never see or fill this field.
  if (String(form.get("website") ?? "") !== "") {
    return { ok: true, errors: {}, values: {} };
  }
  const result = validateInquiry(form, new Date());
  if (!result.ok) return result;
  await saveInquiry(result.values);
  return { ok: true, errors: {}, values: {} };
}
