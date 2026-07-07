# UI Architecture

Project Manji uses reusable UI components to keep the interface consistent across public pages and admin pages.

## Shared UI Components

Located in:

```text
app/components/ui
```

Components:

- `AppLayout`
- `Button`
- `Card`
- `DeleteButton`
- `EmptyState`
- `FormInput`
- `FormTextarea`
- `Layout`
- `PageContainer`
- `PageHero`
- `QuickAction`
- `SectionGrid`
- `SiteContainer`
- `SiteSection`
- `StatCard`

## Rules

- Always use these components before creating new ones.
- Use `AppLayout` for page-level layout.
- Use `SiteContainer` for centered content width.
- Use `PageHero` for standard page titles and descriptions.
- Use `Button` for styled buttons and button-like links.
- Use `Card` for repeated card surfaces.
- Use `FormInput` and `FormTextarea` for admin forms.
- Use `SectionGrid` for responsive card grids.
- Use `StatCard` for dashboard and stats sections.

## Layout Pattern

Standard page:

```tsx
<AppLayout>
  <PageHero
    eyebrow="Project Manji"
    title="Page Title"
    description="Page description."
  />

  <SectionGrid>
    ...
  </SectionGrid>
</AppLayout>
```

Full-width homepage section:

```tsx
<section>
  <SiteContainer>
    ...
  </SiteContainer>
</section>
```

## Avoid

- Creating duplicate layout wrappers
- Repeating card styles manually
- Creating one-off button styles
- Hardcoding page widths
- Placing content outside `SiteContainer` unless it is intentionally full-bleed
