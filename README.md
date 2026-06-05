# Pet Watcher

Mobile-first weekend sitter dashboard for a single household.

## What is included

- Passcode-gated sitter dashboard
- Today checklist grouped by Morning, Afternoon, and Evening
- Tap-to-complete task tracking with progress
- Cross-tab syncing through `BroadcastChannel`
- Trip calendar and planner highlights
- Pet profiles, home details, and emergency contacts
- Local persistence through `localStorage`
- Supabase realtime sync
- In-app and browser notification alerts when another device completes a task

## Run

Open `index.html` in a browser. No build step is required.

## Customize

Edit `app-config.js` for:

- Weekend passcode in `PASSCODE_CONFIG`
- Weekend dates and labels
- Animal profiles
- Checklist tasks
- Home instructions
- Emergency contacts

## Realtime Supabase Setup

1. Create a Supabase project.
2. In Supabase SQL Editor, run this SQL.

```sql
create table if not exists public.pet_watcher_trips (
  id text primary key,
  state jsonb not null,
  updated_by text,
  updated_at timestamptz default now()
);

alter table public.pet_watcher_trips enable row level security;

drop policy if exists "pet watcher public read" on public.pet_watcher_trips;
drop policy if exists "pet watcher public insert" on public.pet_watcher_trips;
drop policy if exists "pet watcher public update" on public.pet_watcher_trips;
drop policy if exists "pet watcher invited read" on public.pet_watcher_trips;
drop policy if exists "pet watcher invited insert" on public.pet_watcher_trips;
drop policy if exists "pet watcher invited update" on public.pet_watcher_trips;

create policy "pet watcher public read"
on public.pet_watcher_trips
for select
to anon, authenticated
using (true);

create policy "pet watcher public insert"
on public.pet_watcher_trips
for insert
to anon, authenticated
with check (true);

create policy "pet watcher public update"
on public.pet_watcher_trips
for update
to anon, authenticated
using (true)
with check (true);

do $$
begin
  alter publication supabase_realtime add table public.pet_watcher_trips;
exception
  when duplicate_object then null;
end $$;
```

3. In Supabase Project Settings > API, copy the Project URL and anon public key.
4. Paste those into `SUPABASE_CONFIG` in `app-config.js`.
5. Set `enabled: true`.
6. Commit and push the changes to GitHub Pages.
7. Open the published app, enter the passcode, and test on two devices.

For browser notifications, tap the `A` button in the header and allow notifications.

This passcode version is intentionally simple. The passcode lives in the static app files, so it is a casual gate for a trusted sitter link, not strong authentication.
