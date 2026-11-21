# ADR-0001: Astro estático con Vue solo en build

## Estado

Aceptado

## Fecha

2026-11-21

## Contexto

El sitio es un portafolio personal bilingüe. Su contenido cambia con poca
frecuencia, no hay autenticación, datos por usuario ni lógica de servidor. Los
requisitos dominantes son velocidad de carga, costo de hosting cercano a cero y
mantenimiento por una sola persona. Aun así se quieren componentes reutilizables
con tipos y una sintaxis cómoda para botones y enlaces.

## Decisión

Usar Astro con `output: 'static'` como generador y Vue 3 (`@astrojs/vue`) como
formato de componente reutilizable, sin directivas `client:*`.

Astro renderiza cada ruta en el build. Los componentes Vue se ejecutan en el
servidor y emiten HTML; no se hidratan en el navegador. La interactividad se
escribe como scripts de Astro explícitos y pequeños, no como islas.

## Alternativas consideradas

### Next.js o Nuxt con exportación estática

- Pros: ecosistema amplio, componentes React/Vue, rutas integradas.
- Contras: runtime de framework e hidratación para un sitio que no la necesita;
  más dependencias y más superficie de actualización.
- Rechazada: el costo en JavaScript y mantenimiento no se justifica.

### HTML, CSS y JavaScript a mano

- Pros: cero dependencias, control total, artefacto mínimo.
- Contras: sin componentes tipados, sin pipeline de assets, sin i18n estructurada;
  la composición de secciones se vuelve repetitiva.
- Rechazada: Astro ofrece el mismo resultado estático con mejor ergonomía.

### Vue SPA con router

- Pros: modelo mental único, navegación cliente.
- Contras: el contenido deja de estar en HTML inicial; SEO y tiempo de primera
  pintura empeoran; no hay necesidad de estado compartido.
- Rechazada: un portafolio no necesita una aplicación cliente.

## Consecuencias

- El artefacto es un directorio de archivos; se despliega en cualquier CDN.
- No hay hidratación ni estado de aplicación; la interactividad es local y
  explícita.
- La mayor parte del código se escribe en `.astro`; Vue se reserva para piezas que
  se benefician de props tipadas y slots (`BaseButton`, `LocaleSwitcher`).
- Cualquier isla interactiva futura debe justificarse; añadir `client:*` es una
  decisión nueva, no un detalle.
