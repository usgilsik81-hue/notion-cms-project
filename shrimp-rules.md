# Development Guidelines

## Project Overview

- Project standard: **Notion CMS Blog**. Stack: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui.
- Current repository state: a `claude-nextjs-starters` boilerplate (Next.js App Router, React 19, Zustand, React Hook Form + Zod, TanStack Query, axios) with only `auth` and `dashboard` scaffolding implemented. No Notion integration code exists yet.
- Target scope is defined in `docs/PRD.md` and `docs/ROADMAP.md`. Read both before adding any blog feature. Do not duplicate their content here — only operational rules for modifying this codebase live in this file.
- TypeScript strict mode is enabled (`tsconfig.json` → `"strict": true`). ESLint config is `eslint-config-next` (core-web-vitals + typescript) — all new code must pass `npm run lint` with zero errors.

## Code Style (must match existing files exactly)

- No semicolons at statement ends. Follow `src/config/env.config.ts`, `src/lib/api/client.ts` as the reference.
- Double quotes for strings, never single quotes.
- Never use `any`. Never add an eslint-disable comment to bypass a type error — fix the type instead.
- Import order: external packages first, blank line, then internal absolute imports via `@/*`. Never use relative imports like `../../lib/utils` when `@/lib/utils` is available.
- Indentation: 2 spaces (matches existing files).

## Directory Responsibilities and Naming

- `src/components/layout/` (no trailing "s") = **global chrome** rendered once per app shell: `Header.tsx`, `Footer.tsx`, `MainNav.tsx`, `Sidebar.tsx`. Only add files here for site-wide navigation/branding elements.
- `src/components/layouts/` (with trailing "s") = **page-level layout wrappers** used inside `app/**/layout.tsx`: `AuthLayout.tsx`, `DashboardLayout.tsx`, `MainLayout.tsx`. A new route group (e.g. blog) that needs its own wrapper goes here as `BlogLayout.tsx`, not in `layout/`.
  - **Do not** put a new file in `layout/` when it is actually a page wrapper, or vice versa — check which of the two existing folders the new file's role matches before creating it.
- `src/components/features/<domain>/` = one folder per business domain (existing: `auth`). Each domain folder re-exports its public components via its own `index.ts` (see `features/auth/index.ts`). A new blog feature (post list, post detail, category filter, search) goes in `src/components/features/blog/`, with its own `index.ts` re-exporting every component added there.
- `src/components/ui/` = shadcn/ui primitives only. **Never hand-write a new file here.** Add/update shadcn components only via the `shadcn` MCP tool (`mcp__shadcn__*`), which respects `components.json` (`style: base-nova`, `baseColor: neutral`, aliases under `@/components`, `@/lib`, `@/hooks`).
- `src/lib/api/` = generic REST client (`client.ts` axios instance, `endpoints.ts` path constants) for the existing auth/user backend. **Do not** add Notion calls here.
- `src/lib/notion/` (new, create when implementing Notion features) = all Notion SDK usage. Required split:
  - `src/lib/notion/client.ts` — initializes and exports the `@notionhq/client` `Client` instance using `envConfig`. Server-only module.
  - `src/lib/notion/posts.ts` — `fetchPages()` and `fetchPageContent(pageId)` per `docs/PRD.md` §4/§7. These are the only functions allowed to call the Notion SDK directly; every other file reads Notion data by importing from here.
- `src/types/` = one file per domain (`auth.ts`, `common.ts`); `index.ts` re-exports all of them (`export * from "./auth"` pattern). Add blog types in `src/types/post.ts` (`Post`, `Category` per the Notion database structure in `docs/PRD.md` §4) and add `export * from "./post"` to `src/types/index.ts` in the same change.
- `src/schemas/` = zod schemas named `<domain>.schema.ts`, paired with `react-hook-form`. Follow `auth.schema.ts` as the template for any new form (e.g. search input, if it uses a form).
- `src/store/` = zustand stores named `<domain>.store.ts`, each exporting `use<Domain>Store`; `store/index.ts` re-exports all stores. Only add a store here for state shared across routes (e.g. search query/filter state); do not add a store for state local to one component.
- `src/hooks/` = custom hooks named `use<Thing>.ts`; `hooks/index.ts` re-exports all of them. Add any new hook file's export to `hooks/index.ts` in the same change — never leave a hook unexported there.
- `src/config/` = one file per concern (`env.config.ts`, `site.config.ts`, `theme.config.ts`).

## Environment Variables (security-critical)

- `src/config/env.config.ts` is the **only** file allowed to read `process.env`. No other file may reference `process.env` directly — import `envConfig` instead.
- When adding Notion integration, add `notionApiKey` / `notionDatabaseId` fields to `envConfig` reading `process.env.NOTION_API_KEY` / `process.env.NOTION_DATABASE_ID`.
- **Never** prefix the Notion API key or database ID with `NEXT_PUBLIC_`. Those values must stay server-only. Only `src/lib/notion/*` (server-side) may import and use them — never pass them into a Client Component or expose them via a client-callable API route response.

## Multi-File Coordination Rules

- Adding a Notion-backed page (e.g. post list) requires, in the same change: the fetch function in `src/lib/notion/posts.ts`, the type in `src/types/post.ts` (+ re-export in `src/types/index.ts`), and the page/component consuming it. Do not add a page that calls the Notion SDK inline without going through `lib/notion`.
- Adding a new REST endpoint for the existing (non-Notion) backend requires updating both `src/lib/api/endpoints.ts` (path constant) and the calling code in the same change — never hardcode a URL string in a component.
- Adding a new shadcn UI primitive requires updating `src/components/ui/index.ts` if other `ui/*` files are re-exported there — check that file before assuming a bare import is fine.
- Updating `docs/PRD.md`'s feature list or Notion database structure requires checking whether `docs/ROADMAP.md`'s phase descriptions still match; update both in the same change if they diverge.

## AI Decision Standards

- Before creating a new component, decide its folder by domain, not by page: blog-related UI → `components/features/blog/`; reused across the whole site → `components/layout/`; a route-group wrapper → `components/layouts/`.
- Before adding a dependency, check `package.json` first — `axios`, `zustand`, `zod`, `react-hook-form`, `@tanstack/react-query`, `lucide-react`, `dayjs` are already available; do not add a competing library (e.g. a second date library, a second HTTP client) for the same purpose.
- When a Notion field name is ambiguous, treat `docs/PRD.md` §4 (Title/Category/Tags/Published/Status/Content) as the source of truth, not assumptions from generic Notion examples.

## Prohibited Actions

- **Do not** hand-write a new file in `src/components/ui/` — use the shadcn MCP tool.
- **Do not** call the Notion SDK from anywhere other than `src/lib/notion/*`.
- **Do not** reference `process.env` outside `src/config/env.config.ts`.
- **Do not** prefix server-only secrets with `NEXT_PUBLIC_`.
- **Do not** use `any`, and do not silence TypeScript errors with `@ts-ignore`/`@ts-expect-error` instead of fixing the type.
- **Do not** add semicolons or switch existing files to single quotes — match the current no-semicolon, double-quote style exactly.
