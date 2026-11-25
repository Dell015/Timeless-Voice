create table public.booking_inquiries (
  id uuid primary key,
  created_at timestamptz not null default now(),
  status text not null default 'New' check (status in ('New', 'In review', 'Closed')),
  name text not null check (char_length(name) between 1 and 150),
  email text not null default '' check (char_length(email) <= 320),
  phone text not null default '' check (char_length(phone) <= 150),
  services text[] not null check (cardinality(services) between 1 and 6),
  talent text not null default '',
  event_date date,
  place text not null default '' check (char_length(place) <= 250),
  details text not null default '' check (char_length(details) <= 2000),
  check (email <> '' or phone <> '')
);

alter table public.booking_inquiries enable row level security;
revoke all on public.booking_inquiries from public, anon, authenticated;
grant select, insert, update on public.booking_inquiries to service_role;
create index booking_inquiries_status_date on public.booking_inquiries (status, created_at desc, id desc);
