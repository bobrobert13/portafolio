# trebor-portfolio

Static, bilingual (Spanish default) personal portfolio. Astro renders every route
at build time; Vue components are authored as server-rendered markup and only get
JavaScript when a `client:*` directive is explicitly added.

## Stack

- Astro `^7.x` (`output: 'static'`), Node `>=22.23.4`, ESM (`"type": "module"`)
- Vue 3 via `@astrojs/vue`, authored with `<script setup lang="ts">`
- TypeScript strict via `astro/tsconfigs/strict`, import alias `@/*` → `src/*`
- Tailwind CSS 4 via `@tailwindcss/vite` (CSS-first: no `tailwind.config.js`)
- No content collections, no Pinia, no router

Add tooling only when the task requires it; ask first.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server on `localhost:4321` |
| `npm run build` | Static build to `dist/` (requires `PUBLIC_SITE_URL`) |
| `npm run preview` | Serve the build |
| `npm run astro -- <cmd>` | Any Astro CLI command |

Dev server: run it in background mode — `astro dev --background` — and manage it
with `astro dev stop`, `astro dev status`, `astro dev logs`.

Set `PUBLIC_SITE_URL` in `.env` (from `.env.example`) before `npm run build`.
Development falls back to `http://localhost:4321`; production must use `https://`.

Not configured: tests, linter, formatter, `astro check` (needs `@astrojs/check` +
`typescript` added first). Do not assume or fabricate these commands.

## Skills

Project skills live in `.agents/skills/` and are pinned in `skills-lock.json`
(source, commit and hash). They are instructions, not runtime code; review them
before use. Install or refresh with `npx skills add <repo> --skill <name> --yes`
and `npx skills update`; list with `npx skills ls`. Never edit a vendored skill by
hand: change the source or the lockfile through the CLI.

| Area | Skills | Use for |
| --- | --- | --- |
| Web quality | `web-quality-audit`, `performance`, `core-web-vitals`, `accessibility`, `seo`, `best-practices` | Lighthouse, Core Web Vitals, WCAG, SEO and source quality reviews |
| Accessibility | `accessibility-audit`, `accessibility-scan`, `accessibility-inspect`, `accessibility-fix`, `accessibility-diff` | WCAG-EM audits, live scans, keyboard and screen-reader checks, fixes and regressions |
| Semantics and UI | `semantic-html-and-seo`, `wcag-accessibility`, `better-accessibility`, `web-design-guidelines` | HTML semantics, WCAG 2.2, focus and keyboard behavior, interface rules |
| Security | `web-security-review`, `code-review-security`, `secrets-scan`, `sca-audit`, `security-review`, `security-and-hardening` | OWASP Top 10, code review, secrets, dependency CVEs and hardening |

Existing project skills: `astro`, `astro-vue`, `vue-patterns`,
`context-engineering`, `impeccable`, `no-ai-slop`, `seo-vue-astro`,
`documentation-and-adrs`. `seo-vue-astro` is the framework-specific SEO
checklist; `seo` is the measurement-led audit.

Shared references live in `.agents/skills/shared/` (AccessLint methodology) and
`.agents/references/security-checklist.md` (hardening checklist).

OWASP's per-skill install omits `plays/` and `templates/`; both are vendored
inside each security skill. `npx skills update` can remove them, so re-copy
after an update. `npx skills ls` may mark a skill as modified when it carries
these vendored support files; that is expected.

### Audit workflow

1. Build with a real HTTPS URL: `PUBLIC_SITE_URL=https://... npm run build`
   (PowerShell: `$env:PUBLIC_SITE_URL='https://...'; npm run build`).
2. For rendered evidence, run `npm run preview` in the background and audit
   `/es/` and `/en/`. Use `web-quality-audit`/Lighthouse for measurement and
   `accessibility-audit` for WCAG-EM sampling.
3. Security pass: `npm audit --audit-level=high`, `npm audit signatures`, then
   `web-security-review`, `secrets-scan` and `sca-audit`.
4. Verify `dist/robots.txt`, `dist/sitemap.xml`, `dist/404.html`,
   `dist/og/{es,en}.jpg` and `dist/_headers`. The CI workflow checks them too.
5. Report findings with evidence, `file:line`, severity and remediation. Do not
   run a fix skill against a finding that has not been reproduced.
6. AccessLint's live tiers need a debuggable Chrome. If its CLI cannot attach,
   fall back to Lighthouse/axe plus manual keyboard and screen-reader checks;
   automated passes are not manual coverage.

## Architecture

```
src/
├── config/                  # single import surface: env + site config
│   ├── env.ts               # typed values from astro:env/client + import.meta.env
│   ├── site.ts              # locales, defaultLocale, site meta, route paths
│   └── index.ts             # barrel: `import { site, locales, type Locale } from '@/config'`
├── i18n/
│   ├── ui.ts                # shared chrome strings, typed UIKey + t()
│   └── utils.ts             # isLocale, getLocaleFromPath, localePath, alternateLocale
├── infra/                   # shared, context-agnostic
│   ├── components/          # BaseButton.vue, LocaleSwitcher.vue, ThemeToggle.astro
│   ├── composables/         # useI18n()
│   ├── layouts/             # BaseLayout.astro (html/head/meta/hreflang/header/footer)
│   └── styles/
│       ├── global.css       # entry: tailwind + theme + base + slides + utilities
│       ├── theme.css        # @theme tokens (colors, fonts, radii, shadows) + light/dark overrides
│       ├── base.css         # @layer base element defaults
│       ├── slides.css       # stacked full-page sticky sheets
│       └── utilities.css    # @utility page-container, skip-link
└── pages/
    ├── index.astro          # `/` → `/es/` (302)
    ├── es/…, en/…           # 3-line route files, one per locale and page
    └── _contexts/           # ignored by the router: bounded contexts, vertical slices
        └── home/index/
            ├── Page.astro     # slice root: BaseLayout + sections
            ├── sections/      # slice-private sections
            └── i18n.ts        # slice copy for every locale
```

### Bounded contexts and vertical slices

- A **bounded context** is a folder under `src/pages/_contexts/`. `_` keeps it out
  of the route table.
- A **page slice** is `<context>/<page>/` and owns everything only it needs:
  `Page.astro`, its sections, and its `i18n.ts`.
- Route files in `src/pages/{es,en}/` are wiring only — they import the slice and
  pass the locale. Never put page markup there.

Adding a page `projects` in the `portfolio` context:

1. `src/pages/_contexts/portfolio/projects/Page.astro` + `sections/` + `i18n.ts`
2. `src/pages/es/projects/index.astro` → `<ProjectsPage lang="es" />`
3. `src/pages/en/projects/index.astro` → `<ProjectsPage lang="en" />`

A page must exist in **both** locale folders; a one-locale page silently breaks
the language switcher and hreflang.

## i18n

- Routing: `prefixDefaultLocale: true`, so every URL is `/es/…` or `/en/…`;
  `src/pages/index.astro` redirects `/` to `defaultLocale` (`es`).
- Shared chrome strings (header, footer, a11y) live in `src/i18n/ui.ts`; page copy
  lives in the slice's `i18n.ts`, typed as `Record<Locale, Copy>`.
- Never hardcode user-visible text in `.astro` or `.vue`; never add a locale
  without updating `locales`, the `src/pages/<locale>/` tree and every
  `Record<Locale, …>` map (the compiler points at the gaps).
- URLs: build them with `localePath(locale, path)` (pure, works in Astro and Vue).
  Reserve `astro:i18n` helpers for Astro-only code.
- `BaseLayout` emits canonical, `hreflang` alternates and `x-default`; keep it the
  only place that writes document metadata.

## Vue conventions

- `.vue` files use `<script setup lang="ts">`, `PascalCase.vue`, typed
  `defineProps`/`withDefaults`, slots for composition, Tailwind utilities for
  styling.
- Shared components live in `src/infra/components` and must not import page
  slices. A component used by one slice belongs in that slice.
- Do **not** add `client:*` unless the component needs browser interactivity.
  Without it Vue renders to HTML with zero JavaScript shipped.
- Locale inside Vue: `useI18n(locale)` from `src/infra/composables/useI18n.ts`
  (`t()`), plus `localePath()` for links. Never read the URL to infer the locale
  inside an island — pass it as a prop.

## Styling (Tailwind 4)

- Utility classes in markup. No component `<style>` block unless a rule cannot be
  expressed with utilities.
- Tokens live only in `src/infra/styles/theme.css` under `@theme static`; dark
  mode overrides the same variables with `prefers-color-scheme`. Never hardcode a
  color, radius or font in a component: use `bg-page`, `text-ink`, `border-line`,
  `text-muted`, `bg-accent`, `text-accent-ink`, `rounded-card`.
- Shared custom utilities belong in `utilities.css` as `@utility`. One-off values
  use arbitrary syntax (`text-[clamp(2rem,6vw,8vw)]`), not a new utility.
- No `@apply` in Vue SFCs (it needs `@reference` and hides classes from markup).
- No `tailwind.config.js`: v4 is configured in CSS. `global.css` is the only
  stylesheet imported, and only `BaseLayout.astro` imports it.

## Config and environment variables

- `astro.config.mjs` declares the `astro:env` schema, i18n routing and
  integrations; it reads `.env` through Vite's `loadEnv` (config is evaluated
  before `import.meta.env` exists).
- Add a variable in three places: schema in `astro.config.mjs`, entry in
  `.env.example`, re-export in `src/config/env.ts`. Consume it from `@/config`,
  never from `import.meta.env` or `astro:env` directly in pages.
- `PUBLIC_*` values ship to the browser: never put secrets there. Server-only
  values need `context: 'server'` and must not be imported by islands.

## Boundaries

- Never commit `dist/`, `.astro/`, `node_modules/`, `graphify-out/`, `.env*`
  (`.env.example` excepted).
- Ask before adding a dependency or integration (static site; bundle size is the
  constraint).
- Site copy is Spanish and English; ask before adding a third locale.

## Verification

- Any change: `PUBLIC_SITE_URL=https://example.com npm run build` must pass
  (PowerShell: `$env:PUBLIC_SITE_URL='https://example.com'; npm run build`), then
  check the rendered page for **both** locales in the dev server (`/es/`, `/en/`),
  not just the source.
- Zero-JS rule: the built HTML must contain no `client:*` hydration scripts unless
  a component genuinely needs them. The home ships small non-hydrating scripts
  only: theme toggle, slide navigation and section-local effects (the company
  browser, the manifesto and process cascades, the contact form, kit animation).
- No test suite exists. Add one only if the task asks for it.

## Project documentation

- `PRODUCT.md` — durable product truth: users, purpose, positioning, evidence and
  constraints. Update it when a product fact changes, not for visual work.
- `DESIGN.md` — visual system in the DESIGN.md format: tokens, typography, layout,
  depth, shapes, components and guardrails. Tokens are normative.
- `docs/system-design.md` — current architecture: module boundaries, rendering,
  i18n, tokens, configuration, failure modes and verification.
- `docs/decisions/` — ADRs for the decisions that shape the architecture. Read the
  relevant ADR before changing a boundary; write a new one to supersede it.

## Documentation

Full documentation: https://docs.astro.build

- [i18n routing](https://docs.astro.build/en/guides/internationalization/)
- [Environment variables / `astro:env`](https://docs.astro.build/en/guides/environment-variables/)
- [Vue integration](https://docs.astro.build/en/guides/integrations-guide/vue/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components & hydration](https://docs.astro.build/en/guides/framework-components/)
- [Styling](https://docs.astro.build/en/guides/styling/)
