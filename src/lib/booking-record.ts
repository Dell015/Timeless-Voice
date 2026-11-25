export const statuses = ["New", "In review", "Closed"] as const;
export type BookingStatus = typeof statuses[number];
export type BookingRecord = {
  id: string;
  created_at: string;
  status: BookingStatus;
  name: string;
  email: string;
  phone: string;
  services: string[];
  talent: string;
  event_date: string | null;
  place: string;
  details: string;
};

export function isBookingStatus(value: unknown): value is BookingStatus {
  return statuses.some(status => status === value);
}
export const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
