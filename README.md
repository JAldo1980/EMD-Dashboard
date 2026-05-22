# KAM Command Hub — Extramile Digital

A standalone key account manager dashboard for Extramile Digital. Built with Vite + React, deployable to Vercel.

## Getting started locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
When prompted:
- Project name: `extramile-kam-command-hub`
- Framework: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

### Option B — GitHub + Vercel (recommended for ongoing updates)
1. Push this repo to GitHub
2. Go to vercel.com → Add New Project → Import your repo
3. Vercel auto-detects Vite — just click Deploy
4. Your URL will be: `extramile-kam-command-hub.vercel.app`

## Updating client data

All data lives in `src/data/clients.json`. Each client object contains:

- `commercials` — retainer, hours, services, upsells
- `relationship` — contact, last meeting, health note, action items
- `market` — sector profile and market signals
- `delivery` — KPIs, performance metrics, next steps

Edit the JSON and redeploy (or push to GitHub if connected — Vercel auto-deploys).

## Adding a new client

Copy an existing client object in `clients.json`, update the fields, and it will appear automatically in the Command Hub.

## Connecting to the Extramile Hub

Once ready, share the Vercel URL with your colleague. They can add it as a linked dashboard card in the hub the same way the Northpoint GTM and Photofab audit dashboards are linked — no code changes needed on their side.
