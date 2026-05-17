create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.daily_checks (
  id uuid primary key default gen_random_uuid(),
  topic text not null check (topic in (
    'backups',
    'pmlsync',
    'mercado_livre',
    'transferencias',
    'certificados'
  )),
  client_id uuid references public.clients(id),
  status text not null,
  severity text not null check (severity in ('low', 'medium', 'high')),
  summary text not null,
  source text not null,
  checked_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists daily_checks_topic_checked_at_idx
  on public.daily_checks (topic, checked_at desc);

create index if not exists daily_checks_client_id_idx
  on public.daily_checks (client_id);

alter table public.clients enable row level security;
alter table public.daily_checks enable row level security;

insert into public.clients (name) values
  ('AFC AUTOMATICOS'),
  ('UNIFRANCE'),
  ('REAL PARIS'),
  ('FORTALEZA'),
  ('GESAN'),
  ('CHAMA PLANTAS')
on conflict (name) do nothing;
