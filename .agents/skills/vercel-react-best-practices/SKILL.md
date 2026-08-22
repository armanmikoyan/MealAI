---
name: vercel-react-best-practices
description: React performance rules that apply to this PlateAI marketing site. Use when writing or reviewing React/Next.js UI, client components, Lucide imports, SVG animation, hydration, or re-renders.
license: MIT
metadata:
  author: vercel
  version: "1.0.0"
---

# Vercel React Best Practices (PlateAI subset)

This repo is a static marketing site: landing sections, a few `'use client'` widgets, Lucide icons, and SVG. There is no data fetching, auth, API routes, or SWR. Only the rules below apply. Do not pull in waterfall, server-cache, or JS micro-opt rules.

## When to Apply

- New or edited React components / Next.js pages
- Client widgets (nav, typewriter, marquee, scroll enter)
- Icon imports and bundle size
- SVG motion or hydration flicker

## Rules to use

Read the linked file before changing matching code.

### Bundle

- [bundle-barrel-imports](rules/bundle-barrel-imports.md) — import Lucide icons (and other packages) directly; avoid barrel re-exports that pull extra modules

### Re-renders

- [rerender-no-inline-components](rules/rerender-no-inline-components.md) — never define a component inside another component
- [rerender-derived-state-no-effect](rules/rerender-derived-state-no-effect.md) — derive values during render, not in `useEffect`
- [rerender-move-effect-to-event](rules/rerender-move-effect-to-event.md) — put click/toggle logic in event handlers
- [rerender-dependencies](rules/rerender-dependencies.md) — keep effect deps primitive

### Rendering

- [rendering-hoist-jsx](rules/rendering-hoist-jsx.md) — extract static marketing JSX outside the component
- [rendering-conditional-render](rules/rendering-conditional-render.md) — use ternary, not `&&`, for conditionals that can be `0`
- [rendering-animate-svg-wrapper](rules/rendering-animate-svg-wrapper.md) — animate a `div` wrapper, not the SVG node
- [rendering-hydration-suppress-warning](rules/rendering-hydration-suppress-warning.md) — suppress only expected client/server mismatches
