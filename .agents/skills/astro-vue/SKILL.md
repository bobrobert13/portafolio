---
name: astro-vue
description: Use Vue in Astro islands — integration setup, SFC components, props and slots, Vue-specific SSR caveats, and state via provide/inject or Pinia. Use when adding Vue components to an Astro project or debugging Vue islands.
license: Apache-2.0
compatibility: Astro 7.x projects. Vue integration version must match the Astro major.
metadata:
  framework: astro
  framework-version: "7.x"
  category: ui
  maturity: L2
  source: official-astro-docs
  source-url: https://docs.astro.build/
  related-skills: astro-ui-framework-selection, astro-islands, astro-integrations
---

# Astro Vue

## Purpose

Integrate Vue single-file components into Astro as islands: setup, props/slots across the boundary, template-based authoring, and Vue-specific concerns (provide/inject, transitions, SSR).

## When to Use

Activate when the task involves:

- adding Vue to an Astro project
- `.vue` SFC components used from `.astro`
- Vue props, slots, provide/inject, or Pinia inside islands
- debugging Vue islands

## When Not to Use

Do not use this skill for:

- framework selection — see `astro-ui-framework-selection`
- hydration directives — see `astro-islands`
- generic Vue app development

## Core Workflow

1. Install: `npx astro add vue`.
2. Write `.vue` SFCs; use them from `.astro` with `client:*` directives.
3. Pass props (JSON-serializable); children via slots; named slots map to Vue slots.
4. Handle Vue-specific state (provide/inject, Pinia) inside the island.
5. Verify hydration in production output.

## Decision Rules

- `<script setup>` SFCs are the standard authoring form.
- Props from `.astro` must be serializable; Vue reactivity applies inside the island.
- `client:only="vue"` for browser-only components; otherwise server-rendered markup hydrates.
- Transitions and `keep-alive` run client-side inside the island.
- Provide/inject does not cross the island boundary — providers must live inside the island subtree.

## Common Patterns

- **Widgets with templates:** forms, modals, carousels — Vue ergonomics for template-heavy UI.
- **Pinia store inside one island** for complex widget state.
- **Slot-based composition:** `.astro` passes markup into Vue slots for flexible sections.

## Anti-Patterns

- Vue for a counter when HTML/CSS suffices.
- Multiple framework runtimes without cause.
- Passing reactive objects/functions as props from `.astro` (not serializable).
- Assuming Vue SSR output equals client output without checking hydration.

## Edge Cases

- **Hydration mismatch:** same class of issues as other frameworks — deterministic render or `client:only`.
- **`v-html` with untrusted content:** sanitize first (`astro-security`).
- **Pinia + SSR:** ensure the store initializes on the server and hydrates consistently.
- **Vue version vs integration:** pin compatible versions (`astro-version-awareness`).

## Verification

1. `astro check` passes (Vue type checking via the integration).
2. Production build hydrates islands; server markup present.
3. Console clean; interactions and slots work.
4. Vue runtime bundle measured and acceptable.
