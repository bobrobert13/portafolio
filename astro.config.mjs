// @ts-check
import { defineConfig, envField } from 'astro/config';
import vue from '@astrojs/vue';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';

// Astro evaluates this file before loading .env into import.meta.env, so read it
// the Vite way. Runtime code imports the same value from `astro:env/client`.
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

export default defineConfig({
  // Fully static output: every route is prerendered at build time.
  output: 'static',

  site: PUBLIC_SITE_URL || undefined,
  integrations: [vue()],

  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      // /es/… and /en/… for every page. `src/pages/index.astro` owns the
      // `/` -> `/es/` redirect, so Astro must not also inject one.
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  env: {
    schema: {
      PUBLIC_SITE_URL: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_SITE_NAME: envField.string({
        context: 'client',
        access: 'public',
        default: 'Trebor',
      }),
      PUBLIC_CONTACT_EMAIL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});