<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may differ from older Next.js projects. Check local docs and existing code patterns before writing code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Manji Agent Guide

You are working on Project Manji, a Next.js community website for Japanese car enthusiasts.

## Goals

- Build production-quality code.
- Preserve existing functionality.
- Keep the UI responsive.
- Keep styling consistent with the Project Manji design system.
- Fix TypeScript and ESLint errors before finishing.
- Do not remove features unless explicitly asked.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Supabase
- OpenAI API

## Project Rules

- Use TypeScript.
- Use Tailwind CSS.
- Do not use inline styles unless absolutely necessary.
- Never duplicate components.
- Reuse existing UI components first.
- Use `AppLayout` for page layout.
- Use `SiteContainer` for centered content.
- Use `PageHero` for standard page headers.
- Use `Button` for buttons and button-like links.
- Use `Card` for card surfaces.
- Use `SectionGrid` for card grids.
- Use `FormInput` and `FormTextarea` for admin forms.
- Use Supabase for all live data.
- Use local data from `app/data` only as fallback or seed data.

## Do Not Break

- Supabase connections
- Authentication
- Admin dashboard
- Admin car management
- AI API routes
- OpenAI assistant page
- Existing public routes

## Design Rules

- Dark theme
- Black backgrounds
- Red accents
- Gray secondary text
- Modern automotive feel
- Premium, minimal, responsive UI
- Rounded cards
- Subtle glow
- Hover lift effects
- Consistent spacing

## Before Finishing

Run:

```bash
npm run lint
npm run build
```

Both should pass.

## Useful Docs

- `README.md`
- `ROADMAP.md`
- `CONTRIBUTING.md`
- `DESIGN.md`
- `DATABASE.md`
- `UI_ARCHITECTURE.md`
- `TODO.md`
