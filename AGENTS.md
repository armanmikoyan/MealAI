<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## TypeScript

Do not inline structural types in props or signatures (no `{ children: ReactNode }` or `Readonly<{ … }>` on the function). Declare a named `type` (or `interface`) and use that name.

Put types **immediately after imports** when they only reference imported types. If a type needs `typeof` some value in the same file (for example `VariantProps<typeof buttonVariants>`), declare that type **right above** the component/function that uses it, after the value exists.

## Naming

- **Folders:** use **kebab-case** (`meal-plan`, `shopping-list`). Single-word segments are lowercase (`test`, `auth`). Apply under **`app/components/`** (and new route segments under **`app/`** when you add them).
- **Constants** (copy and other static values in `constants.ts`, plus root `siteMetadata` in `layout.tsx`): use **UPPERCASE** — `export const FEATURE = { TITLE: '…', BODY: '…' } as const` with **SCREAMING_SNAKE_CASE** keys, or top-level `export const PAGE_TITLE = '…' as const`. Do not use camelCase keys for exported copy objects.

ESLint enforces **kebab-case** folders under `app/components/` (`check-file/folder-naming-convention`) and **UPPER_CASE** names in `app/components/**/constants.ts` (`@typescript-eslint/naming-convention`).

## App structure (features)

Feature folders live under **`app/components/<kebab-case-name>/`**. Typical layout:

- **`constants.ts`** — user-visible copy: **UPPERCASE** export names and **SCREAMING_SNAKE_CASE** keys (`as const`).
- **`index.tsx`** — main feature UI (default export). **`app/<route>/page.tsx`** defines a **`Page`** component that renders it (e.g. `return <Feature />`), not a bare re-export of the feature default.
- **`state.ts`** — **Jotai** atoms and related client state (single file, not a folder).
- **`utils.ts`** — pure helpers, no Jotai (single file, not a folder).

Shared **design-system** primitives live under **`app/ui/`** (e.g. `button.tsx`). Import the file you need (e.g. `@/app/ui/button`) — no barrel in `app/ui/`. **App chrome** (nav, shell, marketing blocks) lives under **`app/components/<kebab-name>/`** (e.g. `nav-bar/`), not in `app/ui/`.

App-wide **metadata** strings used only by the root layout live in **`app/layout.tsx`** next to `export const metadata` (e.g. `SITE_METADATA` with **SCREAMING_SNAKE_CASE** keys — same convention as feature `constants.ts`).

## Copy / UI strings

Do not hardcode user-visible text inside feature components. Import from **`app/components/<feature>/constants.ts`** using the UPPERCASE export(s) defined there. Root layout metadata copy is colocated in **`app/layout.tsx`** as above, also using UPPERCASE naming.

## Documentation

Do not add or recreate `README.md` files unless the user explicitly asks for them.
