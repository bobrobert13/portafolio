import { defaultLocale, locales, type Locale } from '@/config';

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function getLocaleFromPath(pathname: string): Locale {
  const [, first] = pathname.split('/');
  return isLocale(first) ? first : defaultLocale;
}

/**
 * Builds the localized URL for a route path. Pure on purpose: it runs in Astro
 * components and inside Vue islands, where `astro:i18n` helpers are unavailable.
 *
 * `localePath('es')` -> `/es/`
 * `localePath('en', 'projects')` -> `/en/projects/`
 */
export function localePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

export function alternateLocale(locale: Locale): Locale {
  return locales.find((candidate) => candidate !== locale) ?? defaultLocale;
}
