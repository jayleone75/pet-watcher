# Pet Watcher

Mobile-first weekend sitter dashboard for a single household.

## What is included

- Today checklist grouped by Morning, Afternoon, and Evening
- Tap-to-complete task tracking with progress
- Cross-tab syncing through `BroadcastChannel`
- Trip calendar and planner highlights
- Pet profiles, home details, and emergency contacts
- Local persistence through `localStorage`
- Optional Firebase Firestore realtime sync
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

## Realtime Firebase setup

1. Create a Firebase project.
2. Enable Firestore.
3. Add a web app in Firebase project settings.
4. Copy the web config values into `FIREBASE_CONFIG` in `app-config.js`.
5. Set `enabled: true`.
6. Open the same hosted app on two devices. When the sitter marks a task complete, the owner view updates and shows an alert.

For browser notifications, tap the `A` button in the header and allow notifications.
