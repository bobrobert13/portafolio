import { env } from './env';

/** Supported locales. The folder names under `src/pages/` must match these. */
export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

/** Spanish is the default: `/` redirects here and it is the x-default hreflang. */
export const defaultLocale: Locale = 'es';

/**
 * Non-translatable site configuration. Copy that changes per language lives in
 * `src/i18n/ui.ts` (shared chrome) or in each page slice's `i18n.ts`.
 */
export const site = {
  name: env.siteName,
  url: env.siteUrl,
  contactEmail: env.contactEmail,
  socials: {
    linkedin:
      'https://www.linkedin.com/in/robert-caraballo-trebor-js-289a22167/',
    github: 'https://github.com/bobrobert13',
  },
  routes: {
    home: '',
  },
} as const;

export type RouteKey = keyof typeof site.routes;
