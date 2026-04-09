# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint (flat config, no file argument needed)
```

No test framework is configured.

## Architecture

This is a **Next.js 16 / React 19** marketing site for 이창현코딩연구소 (Lee Chang-hyun Coding Lab). It uses the App Router.

**Key stack versions** — these differ from what was common at training time:
- Next.js 16.2.2 (see AGENTS.md warning)
- React 19.2.4
- Tailwind CSS 4 — configured via `@tailwindcss/postcss` in `postcss.config.mjs`; there is **no** `tailwind.config.js` file (Tailwind 4 uses CSS-first configuration)
- ESLint 9 flat config (`eslint.config.mjs`, not `.eslintrc`)

**File structure:**
- `app/layout.tsx` — root layout; sets Geist/Geist_Mono fonts via `next/font/google` CSS variables
- `app/page.tsx` — single-page component `CodingLabWeb`; contains all sections (nav, hero, services, footer) in one file; styled exclusively with Tailwind utility classes
- `app/globals.css` — global styles; uses `@import "tailwindcss"` (Tailwind 4 syntax, not `@tailwind base/components/utilities`)

**Path alias:** `@/` resolves to the project root (configured in `tsconfig.json`).
