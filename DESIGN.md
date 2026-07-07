# Design Guide

Project Manji should feel like a premium Japanese automotive community: dark, sharp, modern, and focused.

## Theme

- Dark theme
- Black base
- Red accents
- Gray supporting text
- White primary text

## Colors

- Black: page backgrounds and major surfaces
- Red: actions, highlights, borders, glows, active states
- Gray: descriptions, metadata, secondary labels
- White: headings and primary labels

## Style

- Premium
- Modern
- Minimal
- Automotive
- Motorsport-inspired
- Night-driving atmosphere

## Layout

- Use `AppLayout` for page structure.
- Use `SiteContainer` for centered width.
- Keep content centered and aligned with the navbar.
- Use generous whitespace.
- Avoid cluttered screens.
- Keep dashboards dense but readable.

## Components

- Use rounded cards.
- Use consistent borders.
- Use red hover states.
- Use reusable UI components before creating new markup.
- Avoid duplicating button, card, form, or layout styles.

## Animations

Use subtle motion only:

- Fade in
- Glow
- Hover lift
- Hover scale
- Smooth transitions

Avoid distracting animations that make the site feel noisy or unstable.

## Spacing

- Use large whitespace between major sections.
- Keep card grids evenly spaced.
- Keep page headers away from the fixed navbar.
- Keep forms and admin panels visually grouped.
- Ensure mobile layouts have enough padding.
