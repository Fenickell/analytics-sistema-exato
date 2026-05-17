-- Rascunho para a fase posterior. Nao usado na V1 visual.

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.daily_checks (
  id uuid primary key default gen_random_uuid(),
  topic text not null,
  client_id uuid references public.clients(id),
  status text not null,
  severity text not null,
  summary text not null,
  source text not null,
  checked_at timestamptz not null default now()
);

alter table public.clients enable row level security;
alter table public.daily_checks enable row level security;
