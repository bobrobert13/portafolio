import type { Locale } from '@/config';

/**
 * Shared chrome strings (header, footer, accessibility). Page content lives in
 * the page slice's own `i18n.ts`, next to the markup that uses it.
 */
const es = {
  'nav.home': 'Inicio',
  'nav.about': 'Sobre mí',
  'nav.process': 'Proceso',
  'nav.projects': 'Proyectos',
  'nav.tools': 'Herramientas',
  'cta.contact': 'Hablemos',
  'a11y.mainNav': 'Navegación principal',
  'a11y.footerNav': 'Navegación del pie',
  'locale.switcher': 'Cambiar idioma',
  'theme.toggle': 'Cambiar tema',
  'locale.es': 'Español',
  'locale.en': 'English',
  'a11y.skipToContent': 'Saltar al contenido',
  'a11y.backToTop': 'Volver arriba',
  'a11y.nextSection': 'Siguiente sección',
  'footer.explore': 'Explorar',
  'footer.contact': 'Contacto',
  'footer.tagline': 'Sitios estáticos, bilingües y sin ruido.',
  'footer.builtWith': 'Hecho con Astro',
  'footer.rights': 'Todos los derechos reservados.',
} as const;

export type UIKey = keyof typeof es;

const en: Record<UIKey, string> = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.process': 'Process',
  'nav.projects': 'Projects',
  'nav.tools': 'Tools',
  'cta.contact': "Let's talk",
  'a11y.mainNav': 'Main navigation',
  'a11y.footerNav': 'Footer navigation',
  'locale.switcher': 'Change language',
  'theme.toggle': 'Toggle theme',
  'locale.es': 'Español',
  'locale.en': 'English',
  'a11y.skipToContent': 'Skip to content',
  'a11y.backToTop': 'Back to top',
  'a11y.nextSection': 'Next section',
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
