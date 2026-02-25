# Event Invitation Template

A modern and customizable event invitation template built with Next.js. Perfect for birthdays, weddings, anniversaries, and other special celebrations.

## Features

- 📅 **Countdown Timer**: Excitement builder for the big day.
- 📍 **Event Details**: Date, time, and location with Google Maps integration.
- 👗 **Dress Code**: Guidelines with tips and examples.
- 💌 **RSVP**: Easy confirmation via Google Forms or external links.
- 🎵 **Music Suggestions**: Links to YouTube or Spotify playlists.
- 🎁 **Gift Registry**: Bank details or gift preferences.
- ℹ️ **Useful Info**: Parking details, tips, and more.
- 📱 **Responsive Design**: Looks great on mobile and desktop.

## Configuration

The content of the invitation is fully customizable through a JSON file. You don't need to touch the code to update the text or links.
The `data.json` file is not included in the repository because it contains sensitive information. You can use `data-example.json` as a template.

1. Copy `src/app/data-example.json` to `src/app/data.json`.
2. Open `src/app/data.json` and update the fields with your event details (names, dates, links, etc.).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Firebase

Build the project and deploy to Firebase Hosting:

```bash
npm run build
firebase deploy --only hosting
```
