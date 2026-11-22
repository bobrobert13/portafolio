# trebor-portfolio

Portafolio personal bilingüe (español por defecto, inglés) construido con Astro.
El sitio se genera por completo en el build y se sirve como archivos estáticos: no
hay servidor de aplicación ni base de datos.

## Inicio rápido

```sh
npm install
cp .env.example .env   # necesario para el build de producción
npm run dev            # http://localhost:4321
```

Abre `/es/` o `/en/`. La raíz `/` redirige a `/es/`.

## Comandos

| Comando | Acción |
|---|---|
| `npm install` | Instalar dependencias |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Build estático en `dist/` (requiere `PUBLIC_SITE_URL`) |
| `npm run preview` | Servir el build |
| `npm run astro -- <cmd>` | Cualquier comando del CLI de Astro |

Requiere Node `>=22.23.4`.

## Stack

- Astro `^7.4.8` con `output: 'static'`
- Vue 3 vía `@astrojs/vue`, sin directivas `client:*`
- TypeScript estricto, alias `@/*` → `src/*`
- Tailwind CSS 4 vía `@tailwindcss/vite`, configurado en CSS
- Sin content collections, router, Pinia ni librería i18n

## Estructura

```
src/
├── config/                  # entorno tipado, locales, sitio y rutas
├── i18n/                    # chrome compartido (t()) y helpers de URL
├── infra/                   # componentes, layout, scripts y estilos
└── pages/
    ├── index.astro          # / → /es/
    ├── es/, en/             # cableado de rutas por locale
    └── _contexts/           # slices de página, fuera del router
        └── home/index/      # Page.astro, sections/ e i18n.ts
```

Los slices de página viven bajo `src/pages/_contexts/`. Los archivos de
`src/pages/{es,en}/` solo importan el slice y le pasan el locale. `src/infra/` no
importa páginas; un componente usado por un solo slice vive en ese slice.

## Arquitectura

El diseño completo —capas, reglas de dependencia, renderizado, i18n, tokens,
configuración, degradación y verificación— está en
[`docs/system-design.md`](docs/system-design.md).

Las decisiones y sus alternativas están en
[`docs/decisions/`](docs/decisions/):

- [0001 — Astro estático con Vue solo en build](docs/decisions/0001-astro-estatico-vue-sin-hidratacion.md)
- [0002 — Contextos delimitados y slices verticales](docs/decisions/0002-contextos-y-slices.md)
- [0003 — Rutas con prefijo de locale](docs/decisions/0003-rutas-con-prefijo-de-locale.md)
- [0004 — Mejora progresiva y cero hidratación](docs/decisions/0004-progressive-enhancement.md)
- [0005 — Tailwind 4 CSS-first con tokens](docs/decisions/0005-tokens-css-first.md)

La referencia visual medida está en
[`docs/visual-reference.md`](docs/visual-reference.md).

## Entorno

Todas las variables son públicas y se resuelven en el build:

| Variable | Uso |
|---|---|
| `PUBLIC_SITE_URL` | URL absoluta para canonical, hreflang, sitemap y OG. Obligatoria en el build |
| `PUBLIC_SITE_NAME` | Nombre mostrado en cabecera, pie y títulos |
| `PUBLIC_CONTACT_EMAIL` | Enlaces `mailto:` y formulario; sin ella, los CTAs van a `#contacto` |

Se declaran en `astro.config.mjs`, se documentan en `.env.example` y se consumen
desde `@/config`; nunca directamente desde `import.meta.env`.

## Verificación

```sh
PUBLIC_SITE_URL=https://tu-dominio.com npm run build
```

En PowerShell: `$env:PUBLIC_SITE_URL='https://tu-dominio.com'; npm run build`.

Después revisa `/es/` y `/en/` en el servidor de desarrollo. Comprueba también que
`dist/robots.txt`, `dist/sitemap.xml`, `dist/404.html` y `dist/og/{es,en}.jpg`
existen, y que el JSON-LD del HTML parsea. No hay tests, linter ni `astro check`;
el build es la validación. El HTML construido no debe contener scripts de
hidratación de Vue.

## Despliegue

- `public/_headers` y `public/_redirects` cubren Netlify y Cloudflare Pages.
- `vercel.json` cubre Vercel (redirect raíz, cabeceras y cache).
- En nginx hay que replicar esas cabeceras y el 302 de `/` a `/es/`.
