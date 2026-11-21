# ADR-0005: Tailwind 4 CSS-first con tokens centralizados

## Estado

Aceptado

## Fecha

2026-11-21

## Contexto

El sitio tiene una identidad visual específica: tipografía display, escala
editorial, radios pequeños, un único acento y dos temas. Esa identidad debe
aplicarse de forma consistente en secciones y componentes, sin que cada archivo
invente colores o medidas. Tailwind 4 permite configurar el sistema en CSS, sin
archivo de configuración JavaScript.

## Decisión

Usar Tailwind CSS 4 mediante `@tailwindcss/vite`, con configuración CSS-first:

- `src/infra/styles/theme.css` declara los tokens bajo `@theme static`: colores,
  fuentes, radios y la única sombra. Generan utilidades (`bg-page`, `text-ink`,
  `border-line`, `rounded-card`) y siguen disponibles como variables CSS.
- Los temas claro y oscuro sobrescriben las mismas variables; oscuro se activa por
  `prefers-color-scheme` o por `data-theme` en `<html>`.
- `global.css` es la única hoja importada y solo la importa `BaseLayout.astro`.
  Orden: Tailwind, tokens, base, slides, utilidades.
- `base.css` contiene solo defaults de elementos en `@layer base`.
- `utilities.css` contiene las utilidades compartidas como `@utility`.
- No hay `tailwind.config.js`. No se usa `@apply` en SFC de Vue.

## Alternativas consideradas

### CSS Modules o CSS plano por componente

- Pros: aislamiento local, sin dependencias de utilidades.
- Contras: duplicación de valores, sin escala compartida, más archivos que
  mantener.
- Rechazada: el sistema de tokens se dispersaría.

### Tailwind 3 con `tailwind.config.js`

- Pros: configuración conocida y documentación abundante.
- Contras: una segunda fuente de verdad en JavaScript y un pipeline distinto al
  que Tailwind 4 propone; además el proyecto ya usa 4.
- Rechazada: no hay razón para retroceder.

### Librería de componentes (shadcn-vue, PrimeVue)

- Pros: componentes accesibles listos.
- Contras: dependencia grande, estilos ajenos a la identidad editorial y control
  limitado del HTML final.
- Rechazada: los componentes propios son pocos y pequeños.

## Consecuencias

- Un color, radio o fuente nuevos se añaden a `theme.css`, no al markup.
- Las utilidades compartidas se promueven a `@utility` solo cuando se repiten; un
  valor de un solo uso usa sintaxis arbitraria.
- El tema oscuro debe mantener contraste; el acento tiene un token específico para
  texto pequeño (`accent-text`) porque el acento vivo no alcanza 3:1 como texto.
- La paleta vigente es la de `theme.css`; `docs/visual-reference.md` es una
  referencia histórica y no debe copiarse sin comprobar los tokens actuales.
