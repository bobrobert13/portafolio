# ADR-0003: Rutas con prefijo de locale y copy tipado

## Estado

Aceptado

## Fecha

2026-11-21

## Contexto

El sitio debe existir en español e inglés. El español es el idioma por defecto y
el contenido no cambia por usuario: no hay detección de idioma por petición ni
preferencia persistida. El copy debe ser editable sin tocar el markup, y un texto
sin traducir no debe llegar a producción.

## Decisión

Usar el enrutado i18n de Astro con prefijo explícito para todos los locales:

- `locales = ['es', 'en']`, `defaultLocale = 'es'`.
- `prefixDefaultLocale: true`: cada URL es `/es/…` o `/en/…`.
- `/` redirige con 302 a `/es/` desde un archivo de ruta propio.
- El chrome compartido vive en `src/i18n/ui.ts` con `t(locale, key)`; el copy de
  página vive en el `i18n.ts` de cada slice como `Record<Locale, Copy>`.
- `src/config` expone `locales`, `defaultLocale` y `Locale`, derivado del array.
- Las URLs se construyen con `localePath()`, una función pura válida en Astro y en
  Vue. No se usa `astro:i18n` fuera de código exclusivo de Astro.

## Alternativas consideradas

### Detección automática por cabecera `Accept-Language`

- Pros: el visitante cae en su idioma sin elegir.
- Contras: exige un host con lógica de servidor o funciones edge; el sitio es
  estático; además complica el cacheo y la canonicalización.
- Rechazada: el requisito es un sitio de archivos.

### Idioma sin prefijo para el locale por defecto

- Pros: URLs más cortas (`/` y `/en/`).
- Contras: dos esquemas de URL, canonical y `hreflang` con casos especiales, y
  riesgo de contenido duplicado entre `/` y `/es/`.
- Rechazada: la simetría del prefijo simplifica routing, SEO y pruebas.

### Librería i18n externa (vue-i18n, i18next)

- Pros: interpolación, plurales y carga diferida.
- Contras: el copy es estático y se resuelve en build; una librería añade runtime
  y una segunda fuente de verdad.
- Rechazada: `t()` y los mapas tipados cubren el caso actual.

## Consecuencias

- Añadir un idioma obliga a actualizar `locales`, el árbol `src/pages/<locale>/` y
  todos los `Record<Locale, …>`; el compilador señala los huecos.
- Toda página debe existir en ambos idiomas o el selector y los `hreflang` quedan
  inconsistentes.
- `BaseLayout` es el único lugar que escribe canonical, alternates y `x-default`.
- El copy es español e inglés; un tercer idioma requiere una decisión explícita.
