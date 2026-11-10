import type { Locale } from '@/config';

/**
 * Shared chrome strings (header, footer, accessibility). Page content lives in
 * the page slice's own `i18n.ts`, next to the markup that uses it.
 */
const es = {
  'nav.home': 'Inicio',
  'nav.services': 'Servicios',
  'nav.process': 'Proceso',
  'nav.about': 'Sobre mí',
  'cta.contact': 'Hablemos',
  'a11y.mainNav': 'Navegación principal',
  'a11y.footerNav': 'Navegación del pie',
  'locale.switcher': 'Cambiar idioma',
  'theme.toggle': 'Cambiar tema',
  'locale.es': 'Español',
  'locale.en': 'English',
  'a11y.skipToContent': 'Saltar al contenido',
  'footer.explore': 'Explorar',
  'footer.contact': 'Contacto',
  'footer.tagline': 'Sitios estáticos, bilingües y sin ruido.',
  'footer.builtWith': 'Hecho con Astro',
  'footer.rights': 'Todos los derechos reservados.',
} as const;

export type UIKey = keyof typeof es;

const en: Record<UIKey, string> = {
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.process': 'Process',
  'nav.about': 'About',
  'cta.contact': "Let's talk",
  'a11y.mainNav': 'Main navigation',
  'a11y.footerNav': 'Footer navigation',
  'locale.switcher': 'Change language',
  'theme.toggle': 'Toggle theme',
  'locale.es': 'Español',
  'locale.en': 'English',
  'a11y.skipToContent': 'Skip to content',
  'footer.explore': 'Explore',
  'footer.contact': 'Contact',
  'footer.tagline': 'Static, bilingual sites without the noise.',
  'footer.builtWith': 'Built with Astro',
  'footer.rights': 'All rights reserved.',
};

export const ui: Record<Locale, Record<UIKey, string>> = { es, en };

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key];
}
