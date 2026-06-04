# Pet Watcher

Mobile-first weekend sitter dashboard for a single household.

## What is included

- Today checklist grouped by Morning, Afternoon, and Evening
- Tap-to-complete task tracking with progress
- Cross-tab syncing through `BroadcastChannel`
- Trip calendar and planner highlights
- Pet profiles, home details, and emergency contacts
- Local persistence through `localStorage`
- Optional Supabase realtime sync
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

## Realtime Supabase setup

1. Create a Supabase project.
2. In Supabase SQL Editor, run:

```sql
create table if not exists public.pet_watcher_trips (
  id text primary key,
  state jsonb not null,
  updated_by text,
  updated_at timestamptz default now()
);

alter table public.pet_watcher_trips enable row level security;

create policy "pet watcher public read"
on public.pet_watcher_trips
for select
using (true);

create policy "pet watcher public insert"
on public.pet_watcher_trips
for insert
with check (true);

create policy "pet watcher public update"
on public.pet_watcher_trips
for update
using (true)
with check (true);

alter publication supabase_realtime add table public.pet_watcher_trips;
```

3. In Supabase Project Settings > API, copy the Project URL and anon public key.
4. Paste those into `SUPABASE_CONFIG` in `app-config.js`.
5. Set `enabled: true`.
6. Commit and push the changes to GitHub Pages.
7. Open the published app on two devices. When the sitter marks a task complete, the owner view updates and shows an alert.

For browser notifications, tap the `A` button in the header and allow notifications.

The SQL above is a simple weekend setup. Anyone with the site can read/update the trip row, so avoid adding private door codes or sensitive home details until auth is added.
