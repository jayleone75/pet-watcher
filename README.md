# Pet Watcher

Mobile-first weekend sitter dashboard for a single household.

## What is included

- Today checklist grouped by Morning, Afternoon, and Evening
- Tap-to-complete task tracking with progress
- Cross-tab syncing through `BroadcastChannel`
- Trip calendar and planner highlights
- Pet profiles, home details, and emergency contacts
- Local persistence through `localStorage`
- Supabase magic-link sign-in and realtime sync
- In-app and browser notification alerts when another device completes a task

## Run

Open `index.html` in a browser. No build step is required.

## Customize

Edit `app-config.js` for:

- Weekend dates and labels
- Animal profiles
- Checklist tasks
- Home instructions
- Emergency contacts

## Realtime Supabase Auth Setup

1. Create a Supabase project.
2. In Supabase Authentication > URL Configuration, set:
   - Site URL: your published app URL, for example `https://likepetwatcher.jayleone.ai`
   - Redirect URLs: the same URL
3. In Supabase SQL Editor, run this SQL. Replace the two example emails first.

```sql
create table if not exists public.pet_watcher_trips (
  id text primary key,
  state jsonb not null,
  updated_by text,
  updated_at timestamptz default now()
);

create table if not exists public.pet_watcher_trip_members (
  trip_id text not null,
  email text not null,
  role text not null default 'sitter',
  primary key (trip_id, email)
);

alter table public.pet_watcher_trips enable row level security;
alter table public.pet_watcher_trip_members enable row level security;

drop policy if exists "pet watcher public read" on public.pet_watcher_trips;
drop policy if exists "pet watcher public insert" on public.pet_watcher_trips;
drop policy if exists "pet watcher public update" on public.pet_watcher_trips;
drop policy if exists "pet watcher invited read" on public.pet_watcher_trips;
drop policy if exists "pet watcher invited insert" on public.pet_watcher_trips;
drop policy if exists "pet watcher invited update" on public.pet_watcher_trips;
drop policy if exists "pet watcher member self read" on public.pet_watcher_trip_members;

insert into public.pet_watcher_trip_members (trip_id, email, role)
values
  ('leone-weekend-trip', 'your-email@example.com', 'owner'),
  ('leone-weekend-trip', 'neighbor-email@example.com', 'sitter')
on conflict (trip_id, email) do update set role = excluded.role;

create policy "pet watcher invited read"
on public.pet_watcher_trips
for select
to authenticated
using (
  exists (
    select 1
    from public.pet_watcher_trip_members member
    where member.trip_id = pet_watcher_trips.id
      and lower(member.email) = lower(auth.jwt() ->> 'email')
  )
);

create policy "pet watcher invited insert"
on public.pet_watcher_trips
for insert
to authenticated
with check (
  exists (
    select 1
    from public.pet_watcher_trip_members member
    where member.trip_id = pet_watcher_trips.id
      and lower(member.email) = lower(auth.jwt() ->> 'email')
  )
);

create policy "pet watcher invited update"
on public.pet_watcher_trips
for update
to authenticated
using (
  exists (
    select 1
    from public.pet_watcher_trip_members member
    where member.trip_id = pet_watcher_trips.id
      and lower(member.email) = lower(auth.jwt() ->> 'email')
  )
)
with check (
  exists (
    select 1
    from public.pet_watcher_trip_members member
    where member.trip_id = pet_watcher_trips.id
      and lower(member.email) = lower(auth.jwt() ->> 'email')
  )
);

create policy "pet watcher member self read"
on public.pet_watcher_trip_members
for select
to authenticated
using (lower(email) = lower(auth.jwt() ->> 'email'));

do $$
begin
  alter publication supabase_realtime add table public.pet_watcher_trips;
exception
  when duplicate_object then null;
end $$;
```

4. In Supabase Project Settings > API, copy the Project URL and anon public key.
5. Paste those into `SUPABASE_CONFIG` in `app-config.js`.
6. Set `enabled: true`.
7. Commit and push the changes to GitHub Pages.
8. Open the published app and sign in with an invited email.

Anyone can request a magic link, but only emails listed in `pet_watcher_trip_members` can read or update this trip.

For browser notifications, tap the `A` button in the header and allow notifications.
