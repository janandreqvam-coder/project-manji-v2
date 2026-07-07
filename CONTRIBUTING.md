# Contributing Guide

This guide keeps Project Manji code consistent, maintainable, and easy for Codex or other contributors to extend.

## Rules

- Use TypeScript.
- Use Tailwind CSS for styling.
- Do not use inline styles unless there is no practical alternative.
- Reuse existing components before creating new ones.
- Use `Button.tsx` for buttons and links that act like buttons.
- Use `Card.tsx` for card-style surfaces.
- Use `SiteContainer.tsx` for centered page width.
- Use `AppLayout.tsx` for page layout.
- Use `PageHero.tsx` for standard page headers.
- Never duplicate UI patterns when a shared component exists.
- Always use Supabase for live application data.
- Use local data from `app/data` only as fallback or seed data.
- Preserve Supabase, authentication, admin, and AI functionality.
- Fix TypeScript and ESLint errors before finishing changes.

## Code Style

- Keep components small and focused.
- Prefer clear props over hidden behavior.
- Keep server components as server components unless client state is required.
- Add `"use client"` only when a component needs client-side state, effects, browser APIs, or event handlers.
- Keep class names readable and consistent with the existing design language.
- Avoid unrelated refactors in feature changes.

## Workflow

Before pushing changes, run:

```bash
npm run lint
npm run build
```

Both commands should pass.

## Data Rules

- Use Supabase for cars, drivers, events, gallery, users, and admin-managed content.
- Do not hardcode production content in components.
- If fallback data is needed, place it in `app/data`.
- Keep database field names consistent across pages and admin tools.
