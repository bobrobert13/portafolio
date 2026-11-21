import { PUBLIC_CONTACT_EMAIL, PUBLIC_SITE_NAME, PUBLIC_SITE_URL } from 'astro:env/client';

const developmentSiteUrl = 'http://localhost:4321';

const resolvedSiteUrl =
  PUBLIC_SITE_URL || (import.meta.env.DEV ? developmentSiteUrl : undefined);

if (!resolvedSiteUrl) {
  throw new Error(
    'PUBLIC_SITE_URL is required for production builds: canonical, hreflang and sitemap depend on it.',
  );
}

/**
 * Single entry point for environment values.
 *
 * `astro:env/client` is the typed schema declared in `astro.config.mjs`, so a
 * misspelled or unregistered variable fails at build time instead of at runtime.
 * Everything here is public by definition (it ends up in the client bundle).
 */
export const env = {
  siteUrl: resolvedSiteUrl.replace(/\/+$/, ''),
  siteName: PUBLIC_SITE_NAME,
  contactEmail: PUBLIC_CONTACT_EMAIL || undefined,
  mode: import.meta.env.MODE,
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const;
