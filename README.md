# Portfolio

Personal site for Ayomide Oredugba, frontend engineer in Lagos.
Live at [mide-builds.vercel.app](https://mide-builds.vercel.app).

## Stack

Next.js 16 (App Router), React 19, TypeScript, CSS Modules. No UI framework
and no CSS framework: layout is CSS Grid and Flexbox, theming is a set of
custom properties in `app/globals.css`, and breakpoints are plain media
queries.

## Layout

```
app/
  layout.tsx      metadata, fonts, global stylesheet
  page.tsx        composes the sections
  globals.css     design tokens, reset, keyframes
components/       one component per section, each with its own module
lib/projects.ts   project and skill content
public/videos/    screen recordings (h264, muted, preload="none")
public/posters/   first-frame stills used as video posters
```

Content lives in `lib/projects.ts`. Adding a project means adding an object
there; nothing in `components/` needs to change.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Media

Videos are muted, carry no audio track, and use `preload="none"` with a
poster image, so the page loads no video bytes until someone presses play.
Source recordings are kept outside the repo; the committed files are
re-encoded at 24fps, CRF 30, with the website captures scaled to 960px wide.
