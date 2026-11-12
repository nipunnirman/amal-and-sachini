# Amal & Sachini – invitation

A Next.js invitation site: an English envelope cover page that opens into the Sinhala invitation (ශ්‍රී සුභ මංගලම්), with countdown, schedule, location and background music. No RSVP or database.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Change the logo

Replace `public/assets/logo.png` with your logo (square PNG with a transparent background works best). It is used on the envelope seal, the envelope card and the top of the invitation.

## Edit the details

- Invitation text (Sinhala): `components/Invitation.jsx`
- Envelope cover (English): `components/EnvelopeOverlay.jsx`
- Page title: `app/layout.jsx`

## Deploy

Import the repository into Vercel as a Next.js project. No environment variables are needed.
