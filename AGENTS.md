# AGENTS.md

Guide for AI agents and contributors working in the **HealthKoins** monorepo.

## Scope of Changes (read first)

Do exactly what is asked - nothing more.

- If asked for functionality, implement only the functionality. Do **not** add or change CSS, styling, class names, markup structure, or UI polish unless explicitly requested.
- If asked for styling, change only styling. Do not touch logic.
- Do not refactor, rename, reorganize files, add comments/docs, add extra features, or "improve" surrounding code that wasn't part of the request.
- Do not add new dependencies, files, or abstractions unless the task cannot be done without them.
- If something else looks wrong or worth changing, mention it in the response instead of changing it.
- If the request is ambiguous, ask before expanding scope.

## Overview

- **Monorepo**: pnpm workspaces + Turborepo
- **Framework**: Next.js 16 (App Router, Turbopack, React Compiler, Cache Components), React 19
- **Styling**: Tailwind CSS v4 (CSS-first, `@tailwindcss/turbopack`) with a legacy `tailwind.config.mjs` loaded via `@config`
- **UI primitives**: shadcn (style `base-luma`) on top of `@base-ui/react`, `class-variance-authority`, `lucide-react`
- **Theming**: `next-themes` (class-based dark mode), OKLCH color tokens
- **Language**: TypeScript 7 (strict)
- **Lint/format**: Biome 2 (no ESLint/Prettier)
- **Package manager**: `pnpm@12.18.0` (do not use npm/yarn)

## Repository Layout

```
apps/
  web/      Public marketing/user site   (package "web",   dev port 3001)
  admin/    Admin dashboard              (package "admin", dev port 3000)
packages/
  config/   @healthkoins/config  - default app config (Config), shared Next.js config, static content (built with tsdown)
  design/   @healthkoins/design  - design system: components, hooks, icons, logos, theme, global CSS (source-only, no build output)
scripts/
  biome-staged.js   Format/lint staged files (used by pre-commit hook)
  clean.js          Remove node_modules, dist, .next, .turbo, coverage, *.tsbuildinfo, etc.
```

Internal packages are consumed with `workspace:*`.

## Commands

Run from the repo root unless noted.

| Command                         | Purpose                                                            |
| ------------------------------- | ------------------------------------------------------------------ |
| `pnpm install`                  | Install all workspace dependencies                                 |
| `pnpm turbo dev`                | Run all apps/packages in dev mode (builds deps first via `^build`) |
| `pnpm turbo dev --filter=web`   | Run only the web app (http://localhost:3001)                       |
| `pnpm turbo dev --filter=admin` | Run only the admin app (http://localhost:3000)                     |
| `pnpm turbo build`              | Build everything (outputs `.next/**`, `dist/**`, `build/**`)       |
| `pnpm biome`                    | `biome check --write .` - format + lint + organize imports         |
| `pnpm clean`                    | Delete build artifacts and `node_modules` across the repo          |

Notes:

- `@healthkoins/config` must be built (`dist/`) before apps can import it. Turbo handles this via `dependsOn: ["^build"]`; if running an app directly with `pnpm dev` inside `apps/*`, build config first (`pnpm --filter @healthkoins/config build`) or run its watcher (`pnpm --filter @healthkoins/config dev`).
- `@healthkoins/design` is consumed directly from source (`transpilePackages`); its `build` is just `tsc --noEmit` (type-check).

## Git Hooks

Husky (`.husky/pre-commit`) runs:

1. `pnpm biome-staged` - Biome check with `--write` on staged files, then re-stages them
2. `pnpm test --if-present`

Never bypass hooks with `--no-verify`.

## Code Style (Biome)

Root [biome.json](biome.json); apps extend it (`"extends": "//"`) and enable the `next` and `react` lint domains.

- 2-space indent, LF line endings, 80-char line width
- Single quotes in TS/JS, **double quotes in JSX attributes**
- Semicolons always, **no trailing commas**, arrow parens always
- Notable lint rules (errors):
  - No unused imports/variables; exhaustive hook deps; hooks at top level
  - `noConsole` (only `console.warn` / `console.error` allowed)
  - `useImportType` (inline `type` imports), `useBlockStatements` (always use braces)
  - `noImplicitBoolean` - write `prop={true}`, not bare `prop`
  - `useSelfClosingElements`, `useTemplate`, `useOptionalChain`, `noUselessFragments`
  - `noImgElement` - use `next/image`, never `<img>`
  - `noDoubleEquals` - always `===`

## TypeScript

[tsconfig.base.json](tsconfig.base.json) is shared by everything. It is strict and enables:
`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`, `isolatedModules`, `noImplicitOverride`, `useUnknownInCatchVariables`, `noFallthroughCasesInSwitch`.

Implications:

- Indexed access returns `T | undefined` - handle it.
- Optional props cannot be passed `undefined` explicitly unless typed `?: T | undefined`.
- Type-only imports must use `import type` / inline `type`.

Other configs:

- [tsconfig.node.json](tsconfig.node.json) - base + `react-jsx`
- [tsconfig.lib.json](tsconfig.lib.json) - Node libraries (`NodeNext`)
- [tsconfig.json](tsconfig.json) - root, type-checks `scripts/**/*.js`
- Apps: `jsx: preserve`, `next` plugin, path alias `@/*` -> `./src/*`

## Apps (`apps/web`, `apps/admin`)

### next.config.ts

Always build config from the shared preset and only pass overrides:

```ts
import { nextConfig } from '@healthkoins/config/nextConfig';

export default nextConfig({
  turbopack: {
    rules: {
      '*.css': { loaders: ['@tailwindcss/turbopack'], as: '*.css' }
    }
  }
});
```

The preset ([packages/config/src/nextConfig.ts](packages/config/src/nextConfig.ts)) sets `reactCompiler`, `cacheComponents`, `output: 'standalone'`, AVIF/WebP images, allowed remote image hosts (`healthkoins.com`, `**.healthkoins.com`, `**.googleusercontent.com`), security headers, and always adds `@healthkoins/design` to `transpilePackages`. Change shared behavior there, not per app.

### Structure (web)

```
src/
  app/                 App Router routes (one folder per route with page.tsx)
    layout.tsx         Root layout: theme init script, NextThemeProvider, Header, <main>, Footer
    globals.css        Imports "@healthkoins/design/globals.css" + app-level @layer styles
  components/          App components (PascalCase files: Header.tsx, Footer.tsx, DataLayout.tsx)
  constants/ROUTES.ts  Single source of truth for routes + SEO metadata
  styles/              Per-feature CSS (PascalCase: DataLayout.css, AuthLayout.css)
  utils/renderText.tsx Replaces {email}/{contact} placeholders in config content with links
```

The admin app uses the same layout pattern but without Header/Footer and with `defaultTheme="system"`.

### Routes and metadata

- Every route is defined in [apps/web/src/constants/ROUTES.ts](apps/web/src/constants/ROUTES.ts) (`href`, `title`, `description`, `label`, optional `badge`, `pageTitle`, `pageDescription`).
- When adding a page: add a `ROUTES` entry, create `src/app/<route>/page.tsx`, and export `metadata` from `ROUTES`. Use `ROUTES.X.href` for links; never hard-code paths.
- Root layout uses a title template `'%s | HealthKoins'`.

Page template:

```tsx
import ROUTES from '@/constants/ROUTES';
import DataLayout from '@/components/DataLayout';

export const metadata = {
  title: ROUTES.FAQ.title,
  description: ROUTES.FAQ.description
};

export default function FAQ() {
  return (
    <DataLayout
      title={ROUTES.FAQ.pageTitle}
      description={ROUTES.FAQ.pageDescription}
      label={ROUTES.FAQ.badge}
    >
      {/* content */}
    </DataLayout>
  );
}
```

- Content/legal pages (FAQ, privacy policy, terms) use `DataLayout`, render their data inline in the page (no extra render component), and share the `data-list` classes (`data-list`, `data-list-item`, `item-title`, `item-text`, `item-list`, `list-title`, `list-data`, `data-item`, `item-section`, `section-title`) styled once in `globals.css`.
- Pages are Server Components by default. Add `'use client'` only to components that need state, effects, or browser APIs (e.g. `Header`, `Footer` use `usePathname`).
- Use `next/image` for images and `next/link` for navigation.

### Styling (no inline Tailwind utilities in JSX)

Apps do **not** put Tailwind utility classes in `className`. JSX only uses semantic class names (e.g. `header-data`, `navigation-link`, `footer-copyright`). All styling lives in CSS files and is written with Tailwind `@apply`.

Where styles go:

- **Global/shell components** (`Header`, `Footer`, `main`): `src/app/globals.css`, which starts with `@import "@healthkoins/design/globals.css";`.
- **Feature/page/component styles**: one PascalCase file per feature in `src/styles/` (e.g. `DataLayout.css`, `AuthLayout.css`), imported straight from the component or page that uses it (`import '@/styles/DataLayout.css';`).
- Feature CSS files start with `@reference "@healthkoins/design/globals.css";` (never `@import`, which would duplicate the whole stylesheet) so `@apply` can resolve tokens and utilities.

How the CSS is written:

- Wrap rules in an unnamed `@layer { ... }`.
- Scope each block under the component's root, using `id` + class (`#header.header`, `#footer.footer`, `#layout-data.layout-data`), and give the root element both: `<div id="layout-data" className="layout-data">`.
- Nest child selectors with native CSS nesting; use `&` for states/modifiers (`&.active::after`, `&:not(.active)`).
- Use `@apply` for everything, including responsive/dark/hover variants (`@apply text-heading-3 lg:text-heading-2 xl:text-heading-1;`). Split long lists across several `@apply` lines grouped by concern. Plain CSS is fine for things `@apply` can't express (e.g. `content: "";`).
- Use design tokens (`bg-card`, `bg-primary`, `text-muted-foreground`, `border`, etc.) and the custom type scale (`text-display-1..4`, `text-heading-1..6`, `text-label-1..4`, `text-body-1..6`) instead of raw colors/sizes.
- `container` is the only layout utility used directly in JSX (from the design system's container config).

Dynamic classes: toggle **semantic** classes with `cn()` from `@healthkoins/design/lib/utils` (e.g. `cn('navigation-link', active && 'active')`) and style the state in CSS.

Example:

```tsx
// src/components/DataLayout.tsx
import '@/styles/DataLayout.css';

<div id="layout-data" className="layout-data">
  <div className="data-header">
    <h1 className="header-title">{title}</h1>
  </div>
</div>;
```

```css
/* src/styles/DataLayout.css */
@reference "@healthkoins/design/globals.css";

@layer {
  #layout-data.layout-data {
    .data-header {
      @apply py-24 bg-card;

      .header-title {
        @apply mb-4;
        @apply text-heading-3 lg:text-heading-2 xl:text-heading-1;
      }
    }
  }
}
```

This rule is for the apps. Components in `packages/design` (shadcn) keep their Tailwind utility classes inline with CVA + `cn()`.

## Package: `@healthkoins/design`

Source-only package; exports map points directly at `.ts/.tsx` files.

| Import                                  | Contents                                                                                                              |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `@healthkoins/design`                   | `NextThemeProvider`, `NextThemeToggle`                                                                                |
| `@healthkoins/design/components/<name>` | UI components (`accordion`, `badge`, `button`, `field`, `input`, `label`, `separator`, `slider`, `switch`, `tooltip`) |
| `@healthkoins/design/hooks/<name>`      | Hooks (e.g. `use-mobile` -> `useIsMobile`)                                                                            |
| `@healthkoins/design/lib/utils`         | `cn()` (extended for custom font-size/weight groups)                                                                  |
| `@healthkoins/design/icons`             | Re-export of all `lucide-react` icons                                                                                 |
| `@healthkoins/design/logo`              | Logo/image assets (e.g. `LogoImgGoogle`)                                                                              |
| `@healthkoins/design/globals.css`       | Tailwind v4 entry, fonts, theme tokens (light `:root` / `.dark`)                                                      |

Conventions:

- Always import icons from `@healthkoins/design/icons`, not `lucide-react` directly.
- Inside the package, use subpath imports: `#components/*`, `#lib/*`, `#hooks/*`.
- Component files are kebab-case and lowercase (shadcn convention); components use `@base-ui/react` primitives + CVA variants + `cn()`.
- Add new shadcn components from `packages/design` (config in [packages/design/components.json](packages/design/components.json): style `base-luma`, base color `zinc`, icon library `lucide`, RSC enabled), e.g. `pnpm dlx shadcn@latest add <component>` run inside `packages/design`. New components are automatically available via the `./components/*` export.
- New logos/assets: add the file under `src/logo/` and export it from [packages/design/src/logo/index.ts](packages/design/src/logo/index.ts). PNG/SVG module types live in `src/types/svg.d.ts`.
- New design tokens/type scale: update [packages/design/src/styles/globals.css](packages/design/src/styles/globals.css) / [packages/design/tailwind.config.mjs](packages/design/tailwind.config.mjs), and register new font-size/weight classes in `cn()` ([packages/design/src/lib/utils.ts](packages/design/src/lib/utils.ts)) so merging works.

## Package: `@healthkoins/config`

ESM-only, built with tsdown ([packages/config/tsdown.config.ts](packages/config/tsdown.config.ts)) to `dist/` (target `node24`, `.d.mts` types).

| Source                     | Export                                                                                                                                          |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/index.ts`             | `@healthkoins/config` -> `Config` (`{ email, domain }`) - app-agnostic shared values                                                            |
| `src/nextConfig.ts`        | `@healthkoins/config/nextConfig` -> `nextConfig(overrides?)`                                                                                    |
| `src/DataFAQ.ts`           | `@healthkoins/config/DataFAQ` -> `DataFAQ`, `Type_DataFAQ`, `Type_FAQ`                                                                          |
| `src/DataTermsOfUse.ts`    | `@healthkoins/config/DataTermsOfUse` -> `DataTermsOfUse`, `Type_DataTermsOfUse`, `Type_TermsSection`, `Type_TermsList`                          |
| `src/DataPrivacyPolicy.ts` | `@healthkoins/config/DataPrivacyPolicy` -> `DataPrivacyPolicy`, `Type_DataPrivacyPolicy`, `Type_PrivacyPolicySection`, `Type_PrivacyPolicyList` |

To expose a new module: add it to `entry` in `tsdown.config.ts` **and** to `exports` in `package.json` (`types` -> `./dist/<name>.d.mts`, `default` -> `./dist/<name>.mjs`), then rebuild.

### Default config (`src/index.ts`)

- Single source of truth for values shared by every app (web, admin, future React Native app): e.g. `Config.email`, `Config.domain`.
- Keep it platform-agnostic: plain constants only, no Next.js/React/DOM imports.
- Store only base values (e.g. the domain, not full URLs). Apps build paths themselves (web: `` `${Config.domain}${ROUTES.CONTACT.href}` ``).
- Import types from config (`import { type Type_TermsSection } from '@healthkoins/config/DataTermsOfUse'`); don't redeclare them in apps.

### Static content (`Data*.ts`)

FAQ and legal text live here as typed data; apps render it. All three share the same shape:

- Document: `{ lastUpdated, data }` (privacy policy also has `description`).
- Section/group: `{ title, data }`.
- List: `{ title?, type: 'ordered' | 'unordered', data: string[] }`. An object with `type` is a list; an object without `type` is a nested section (privacy policy only).
- Plain strings are paragraphs.
- Never hard-code shared values in text. Use placeholders that resolve from `Config`: `{email}` and `{contact}`.

In the web app, render content strings with `renderText()` from [apps/web/src/utils/renderText.tsx](apps/web/src/utils/renderText.tsx), which replaces placeholders with links (`{email}` -> `mailto:`, `{contact}` -> `ROUTES.CONTACT.href`). To add a placeholder, add it to `TOKENS` and `TOKEN_REGEX` there.

## Adding Dependencies

- Add to the specific workspace: `pnpm --filter <web|admin|@healthkoins/design|@healthkoins/config> add <pkg>`.
- Versions are pinned exactly (no `^`/`~`); keep shared deps (`next`, `react`, `typescript`, `tailwindcss`, `@biomejs/biome`) on the same version across workspaces.
- Packages with install scripts must be allow-listed under `allowBuilds` in [pnpm-workspace.yaml](pnpm-workspace.yaml).

## Agent Checklist

0. Do only what was asked - e.g. a functionality request means no CSS/styling changes (see "Scope of Changes").
1. Respect Biome formatting (single quotes, no trailing commas, `prop={true}`); run `pnpm biome` after edits.
2. Keep TypeScript strict-clean; no `any` unless unavoidable.
3. Reuse design system components/tokens before writing new UI; put shared UI in `packages/design`, app-specific UI in `apps/<app>/src/components`.
4. In apps, never write Tailwind utilities in `className`; use semantic class names and style them with `@apply` in `globals.css` or `src/styles/<Feature>.css`.
5. Define routes and metadata via `ROUTES`; never hard-code URLs or titles.
6. Default to Server Components; add `'use client'` only when required.
7. Shared Next.js config changes go in `packages/config/src/nextConfig.ts`; shared app-agnostic values (email, domain, ...) go in `packages/config/src/index.ts`.
8. Don't commit build artifacts (`.next`, `dist`, `.turbo`).
