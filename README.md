# Wallerama Summer Fest 2026 — site

A living, scrollable web version of Preeti Iyer's festival guide (poster → venue map → what to expect + lineup → what to bring + reminders). Built so text/lineup can be tweaked anytime.

**Live:** https://mielamayer.github.io/wallerama/

## Stack (Lovable-ready)
Vite + React + TypeScript + Tailwind + shadcn-style setup (`components.json`, `@/` alias, `cn()` util). Import this repo into Lovable to edit visually.

## Where things live
- **All copy + the lineup:** [`src/content.ts`](src/content.ts) — edit strings here (or ask Claude / prompt Lovable).
- **Links:** the `links` object at the top of `src/content.ts` (Partiful, WhatsApp, rides/gear Sheet, contribute form, Venmo).
- **Images (poster + venue map):** `public/images/`. To swap in higher-res art from Preeti, replace `poster.png` / `venuemap.png` with same filenames.
- **Layout:** `src/App.tsx`; lineup grid in `src/components/Lineup.tsx`.

## In-browser Admin Edit (preview-only)
Add `?edit` to the URL and enter the password (`wallerama2026`, change it in `src/lib/editable.tsx`). You can click any text to edit it; changes save to **your browser only** and can be exported as JSON. To make edits everyone sees, either send the exported JSON to be committed here, or use Lovable + Supabase for real multi-user editing (recommended for shared editing).

## Local dev
```bash
npm install
npm run dev      # http://localhost:5173/wallerama/
npm run build
```

## Connect to Lovable
1. Push this repo to GitHub (done).
2. In Lovable: **New Project → Import from GitHub → MielaMayer/wallerama**.
3. Lovable serves at root, so set `base: "/"` in `vite.config.ts` inside Lovable (or keep a Lovable branch). For GitHub Pages the base must stay `/wallerama/`.
