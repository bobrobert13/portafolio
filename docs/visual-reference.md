# Referencia visual: gbascunana.dev

Marco de composición tomado de <https://www.gbascunana.dev/en> el 2026-11-09.
El sitio puede cambiar; esta captura fija los valores medidos en ese momento.

Método: `firecrawl_scrape` con `markdown`, `branding`, `screenshot` full-page
(1440×900, resultado 1440×5115) y `html`; más las dos hojas de estilo de
producción (`/_next/static/chunks/*.css`, 121 KB) para leer medidas reales. Los
valores de tipografía, espaciado y breakpoints salen del CSS, no de estimación
visual. El sitio es Next.js con CSS propio; no hay framework de utilidades.

## 1. Identidad

| Rasgo | Valor observado |
|---|---|
| Tono | editorial técnico, directo, primera persona |
| Energía | alta en el hero, contenida en el resto |
| Audiencia | desarrolladores y fundadores que buscan construir SaaS |
| Esquema | solo oscuro (`class="dark"`, `color-scheme` oscuro) |
| Acento | un único naranja, usado en botones, cifras y enlaces |
| Estructura | marco de 1440 px con bordes verticales, secciones separadas por hairlines de 1 px |
| Imagen | retrato en blanco y negro sobre degradado de acento |

La expresividad se concentra en tres piezas: el titular de tres líneas a 76 px,
el panel degradado del retrato y las cifras monoespaciadas. Todo lo demás es
retícula, borde y tipografía.

## 2. Paleta original

Variables de `.editorial-theme` en producción.

| Token | Valor | Uso |
|---|---|---|
| `--background` | `#0B0B0B` | fondo del marco |
| fondo de página | `#080808` | detrás del marco |
| `--background-secondary` | `#10100F` | paneles (consulting, formularios) |
| `--background-tertiary` | `#181817` | superficies elevadas |
| `--editorial-band` | `#0E0E0D` | bandas alternas |
| `--foreground` | `#F4F3F1` | texto principal |
| `--foreground-muted` | `#A6A5A2` | texto secundario |
| `--foreground-subtle` | `#8A8986` | metadatos |
| `--border-color` | `rgba(255,255,255,0.08)` | hairlines |
| `--border-color-hover` | `rgba(255,255,255,0.19)` | hover de botones |
| `--accent-primary` | `#F97316` | acento |
| `--accent-start` / `--accent-end` | `#F97316` → `#EA580C` | degradados |
| `--accent-secondary` | `#F59E0B` → `#D97706` | acento secundario |
| texto sobre acento | `#191007` | botón primario |

Cifras de contraste: texto `#F4F3F1` sobre `#0B0B0B` ≈ 18:1; acento `#F97316`
sobre `#0B0B0B` ≈ 7:1; texto del botón `#191007` sobre `#F97316` ≈ 9:1.

## 3. Tipografía

Familias: `DM Sans` (texto y titulares, pesos 300–800) y `JetBrains Mono`
(etiquetas, cifras, metadatos, pesos 400–700), ambas autoalojadas con `next/font`.

### Escala

| Rol | Tamaño | Interlínea | Tracking | Peso |
|---|---|---|---|---|
| H1 hero | 76 px | 0.96 | −0.042em | 700 |
| H2 sección | 44 px | 1.04 | −0.032em | 700 |
| H2 manifiesto | 40 px | 1.08 | −0.030em | 700 |
| H2 about | 36 px | 1.10 | −0.030em | 700 |
| H3 tarjeta | 20 px | 1.20 | −0.020em | 700 |
| Lead hero | 22 px | 1.45 | 0 | 400 |
| Cuerpo | 17 px | 1.75 | 0 | 400 |
| Descripción de tarjeta | 14 px | 1.60 | 0 | 400 |
| Botón | 14 px | 1.40 | 0 | 500 |
| Botón primario | 14 px | 1.40 | 0 | 700 |
| Eyebrow | 11 px | 1.50 | 1.6px | 400, mono, mayúsculas |
| Cifra de stat | 26 px | 1.25 | 0 | 400, mono |
| Etiqueta pequeña | 10–11 px | 1.50 | 0.2–0.3px | 400, mono |

Reglas:

- Titulares con `text-wrap: balance`.
- Los eyebrows son el único texto en mayúsculas y monoespaciado; nunca se
  combinan con tracking amplio en el cuerpo.
- El tracking negativo crece con el tamaño (de −0.02em a −0.042em).
- Las cifras y los números de tarjeta (`01`…`06`) usan mono y son ornamento, no
  datos.

## 4. Retícula y medidas

- Marco: `width: calc(100% - 16px)`, `max-width: 1440px`, `border-inline: 1px`,
  centrado. En móvil (<640 px) pierde bordes y ocupa el 100 %.
- Gutter interior: 44 px en desktop; 28 px (<1200), 24 px (<768), 18 px (<640).
- Las secciones ocupan el ancho completo del marco; el contenido respira con el
  gutter, no con un contenedor centrado adicional.
- Rejillas de dos columnas con proporciones declaradas:
  - hero `1.05fr / 0.95fr`
  - manifiesto y filas de recursos `1fr / 1.15fr`, gap 64 px
  - feature `1fr / 0.72fr`, gap 48 px
  - about `0.85fr / 1.15fr`
- Rejillas de tarjetas: 3 columnas, `gap: 1px` sobre fondo `--border-color`, con
  borde exterior y `border-radius: 10px`. El hueco es la línea.
- Bandas alternas con `--editorial-band` para separar bloques sin sombras.

### Breakpoints reales

| Ancho | Cambios |
|---|---|
| ≥1440 | H1 a 76 px, tope de 600 px de ancho |
| <1200 | H1 64 px, gutter 28 px, tarjetas 22/20 px |
| <1024 | H1 56 px, hero en una columna de acciones, rejillas 2 columnas, testimonios 1 columna |
| <768 | H1 44 px, manifiesto y filas a 1 columna, padding de sección 56/24, footer 2 columnas |
| <640 | marco sin bordes, hero en bloque con retrato absoluto de 390 px, H1 `clamp(43px, 10.5vw, 60px)`, tarjetas 1 columna |
| <480 | botones del hero a ancho completo |

## 5. Anatomía del home

Orden y medidas. Todas las secciones llevan `border-bottom: 1px solid
var(--border-color)` salvo el pie.

| # | Sección | Composición | Medidas clave |
|---|---|---|---|
| 1 | Hero | 2 columnas: texto + retrato | min-height 520 px; copy `88 36 72 44`; H1 76/0.96; lead 22 px; 2 CTAs; 3 stats con borde superior |
| 2 | Manifiesto | H2 izquierda, 3 párrafos derecha | grid 1/1.15, gap 64; padding `76 44 72`; H2 40 px; cuerpo 17/1.75 |
| 3 | Trabajo | cabecera + rejilla 3×2 | banda; cabecera `76 44 38`; tarjetas min 250 px, padding 25/24/24; tags mono 11 px |
| 4 | Rutas | cabecera + 4 filas | padding `0 44 68`; fila `34 0`, grid 1/1.15; lista en 3 columnas `78px 1fr 15px` |
| 5 | Feature | texto + panel | padding-block 52; grid 1/0.72 gap 48; panel con degradado de acento al 6 %, borde 18 %, radio 10 |
| 6 | Testimonios | 3 placeholders + franja de stack | padding `64 44 30`; tarjetas min 236, padding 28; franja 34/22 |
| 7 | About | retrato + biografía | grid 0.85/1.15; retrato min 465 px; copy padding `78 60 78 42`; máscara inferior |
| 8 | Footer | 4 columnas + barra inferior | padding `60 44 0`; columnas 1.15/1/1/1 gap 32; barra 11 px |

### Hero

- Eyebrow mono con separador `·`: `INDIE HACKING · AI ENGINEERING`.
- H1 en tres `<span>` de bloque, cada uno una frase corta.
- CTAs: primario relleno y secundario con borde; ambos 44 px de alto, radio 9 px.
- Stats: `dl` de 3 columnas, borde superior, `dd` mono 26 px sobre `dt` 11 px;
  en el DOM el valor va antes que la etiqueta (`flex-direction: column-reverse`).
- Retrato: panel absoluto con degradado horizontal de 4 paradas
  (`#0B0B0B → #713110 34% → #DF6315 67% → #F97316`) y capa de ruido SVG al 4.5 %.
  La foto va en escala de grises, 122 % de ancho, anclada al pie y centrada.

### Tarjetas de trabajo

- Número mono (`01`), título y, si existe, icono de 22 px a la derecha.
- Descripción de 14 px, luego tags y, al pie, una acción de ancho completo.
- La primera tarjeta usa número y acción en color de acento; el resto en gris.
- Hover: la acción tiñe fondo y borde con el acento al 6–22 %; el icono pasa de
  gris a color.

### Filas de rutas

- Pregunta a la izquierda con eyebrow + punto de acento de 5 px.
- Enlace de texto con flecha; a la derecha, lista de 3 enlaces con etiqueta mono
  de 10 px, título de 14 px y flecha de 15 px.
- Separación por borde superior de 1 px entre filas.

### Feature y panel

- Columna izquierda: eyebrow, H2, descripción, badge con punto, subtítulo H3,
  detalle y `dl` de dos pares.
- Columna derecha: panel con degradado de acento al 6 %, borde de acento al 18 %,
  gráfico tipográfico `0↗1` y CTA primario.

### Placeholders de testimonio

- Etiqueta mono `Testimonio pendiente · 01`, cita de 20 px y autor con círculo de
  32 px de borde discontinuo. El sitio muestra el hueco a propósito.

## 6. Componentes

| Componente | Medidas |
|---|---|
| Botón base | min-height 44 px, padding 12/18, radio 9 px, borde `rgba(255,255,255,0.15)`, 14 px/500, gap 9 px, icono 16 px |
| Botón primario | fondo de acento, texto oscuro, borde de acento al 44 %, `inset 0 1px rgba(255,255,255,0.09)` |
| CTA de cabecera | 12 px, min-height 32 px, padding 7/13, radio 7 px |
| Nav | 13 px, gap 2 px, padding 7/10, radio 6 px; activo con fondo blanco al 5 % |
| Tag | mono 11 px, padding 5/9, radio 5 px, fondo blanco al 3 %, borde al 5 % |
| Acción de tarjeta | mono 11 px, padding 10/12, radio 8 px, borde hairline |
| Eyebrow | mono 11 px, mayúsculas, tracking 1.6 px, color muted |
| Punto de acento | círculo de 5 px |
| Inputs | 44 px de alto, radio 8 px, fondo de superficie |

No hay sombras difusas. La profundidad viene de bordes, fondos y del `inset`
blanco del botón primario.

## 7. Imagen y textura

- Retratos en `filter: grayscale()`; el color lo aporta el panel de acento.
- Máscara inferior en about (`linear-gradient(#000 80%, transparent 100%)`).
- En móvil el retrato del hero pasa a fondo absoluto de 390 px con máscara
  `linear-gradient(#000 25%, transparent 90%)`.
- Ruido fractal SVG al 4.5 % sobre el degradado; evita el aspecto plano.
- Sin ilustraciones decorativas ni iconos fuera de flechas y redes.

## 8. Movimiento

- Transiciones de 150–180 ms sobre color, borde y fondo.
- Sin animaciones de entrada, parallax ni scroll effects.
- `prefers-reduced-motion` desactiva las animaciones declaradas.
- El hover más visible es el teñido de la acción de tarjeta.

## 9. Contenido

Ocho bloques con una función cada uno:

1. Promesa en tres frases y prueba rápida (stats).
2. Relato de por qué existe el sitio.
3. Oferta concreta en seis tarjetas.
4. Cuatro caminos de entrada con enlaces.
5. Puerta de contacto con panel de marca.
6. Prueba social en hueco + herramientas.
7. Biografía y enlaces.
8. Navegación secundaria y legal.

El copy es corto, en primera persona y sin adjetivos de relleno. Los títulos de
sección son frases completas; los eyebrows, categorías.

## 10. Adaptación a trebor-portfolio

Decisiones para el rediseño. El marco se conserva; la identidad cambia.

### Paleta nueva

Se sustituye el naranja por un eje verde lima/oliva para diferenciar el sitio.
Los tokens viven en `src/infra/styles/theme.css`.

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--color-page` | `#FBFAF5` | `#080A07` | fondo |
| `--color-band` | `#F4F4EA` | `#0D100B` | bandas |
| `--color-surface` | `#EFF0E4` | `#11150E` | paneles |
| `--color-ink` | `#12140E` | `#F2F4EC` | texto |
| `--color-muted` | `#5E6259` | `#A7AC9F` | secundario |
| `--color-subtle` | `#666B60` | `#858A7E` | metadatos |
| `--color-line` | `#E0E1D5` | `rgba(255,255,255,0.08)` | hairlines |
| `--color-accent` | `#4A6A00` | `#C7F24C` | acento |
| `--color-accent-ink` | `#FFFFFF` | `#11150A` | texto sobre acento |
| `--color-plate` | `#B8E04A` | `#C7F24C` | placa del retrato |

Contraste: acento claro sobre fondo claro ≈ 5.5:1; acento oscuro sobre fondo
oscuro ≈ 13:1. El acento no se usa como texto pequeño en modo claro sin
comprobar el par concreto.

Radios: `--radius-xs` 5 px (tags), `--radius-nav` 6 px, `--radius-cta` 7 px,
`--radius-sm` 8 px (acciones, rejillas), `--radius-btn` 9 px,
`--radius-card` 10 px (paneles). La única sombra es `--shadow-btn`
(`inset 0 1px 0 rgb(255 255 255 / 0.16)`), aplicada al botón relleno y al CTA de
cabecera.

### Tipografía

Se mantienen DM Sans y JetBrains Mono como pareja, autoalojadas en
`public/fonts/` (subconjunto latin, 62 KB + 31 KB, `font-display: swap`). Sin
peticiones a Google en runtime.

### Imagen

`public/img/portrait-placeholder.jpg` es una foto de Unsplash usada como
marcador. Se reemplaza por el retrato definitivo sin tocar el layout. El panel
del hero aplica `grayscale` + `mix-blend-multiply` sobre el acento para el
duotono; el about reutiliza la misma imagen con máscara inferior.

### Diferencias intencionales

- El sitio original es solo oscuro; aquí hay claro y oscuro por
  `prefers-color-scheme` y un toggle explícito en la cabecera (`data-theme`
  sobre `<html>`, persistido en `localStorage`). El script del `<head>` aplica la
  preferencia antes de pintar para evitar el flash.
- Sin menú móvil con JavaScript: la navegación se oculta por debajo de `md` y el
  pie cubre los enlaces. En escritorio, el riel horizontal añade un único script
  de navegación (~1 KB) para anclas y foco; la animación no usa JavaScript.
- En móvil el retrato del hero va debajo del texto, con máscara inferior, en
  lugar de superponerse. El texto oscuro sobre una placa oscura no garantiza
  contraste en modo claro.
- Sin enlaces a rutas inexistentes: los CTAs apuntan a `#contacto`, anclas de la
  página o `mailto:`; los testimonios se declaran pendientes.
- Los botones que envían correo solo se renderizan cuando
  `PUBLIC_CONTACT_EMAIL` está configurado. Sin esa variable la sección de
  contacto queda como navegación y el panel no muestra un CTA muerto.
- El stack strip lista tecnologías reales del proyecto, sin enlaces.
- Sin marco: `.site-frame` ocupa el 100 % del viewport, sin bordes laterales ni
  tope de 1440 px. El contenido conserva el gutter de 44 px y los textos largos
  se limitan a 46–52 rem. La cabecera es `fixed` en el riel y flota sobre el
  panel translúcido, de modo que la primera pantalla llena el escritorio de
  borde a borde.
- La escala display crece con el viewport: H1 hasta 112 px, H2 hasta 56 px, lead
  hasta 28 px. Los anchos del hero son fluidos (600 → 1000 px y 510 → 680 px)
  para que 1920 y 2560 no queden con una columna de texto estrecha.

### Correspondencia de archivos

| Pieza | Archivo |
|---|---|
| Tokens, fuentes, paleta | `src/infra/styles/theme.css` |
| Base tipográfica | `src/infra/styles/base.css` |
| Marco, gutter, eyebrow | `src/infra/styles/utilities.css` |
| Cabecera y pie | `src/infra/layouts/BaseLayout.astro` |
| Copy del home | `src/pages/_contexts/home/index/i18n.ts` |
| Secciones | `src/pages/_contexts/home/index/sections/*.astro` |
| Composición | `src/pages/_contexts/home/index/Page.astro` |
| Riel horizontal | `src/infra/styles/rail.css` |
| Máscara de arena | `public/img/sand-mask.png` |
| Toggle de tema | `src/infra/components/ThemeToggle.astro` |
| Flechas | `src/infra/components/ArrowIcon.astro` |
| Retrato provisional | `public/img/portrait-placeholder.jpg` |

## 11. Riel horizontal

A partir de 1024 px el home deja de apilarse: el contenido viaja en horizontal
mientras la página se desplaza en vertical.

- Estructura: `.rail` (7 × `100dvh`) → `.rail-stage` sticky de `100dvh` →
  `.rail-track` flex con 7 `.rail-slide` de `100%`.
- La animación es CSS puro. `.rail` declara `view-timeline: --rail block`; la
  pista anima `translateX` de 0 a `(7 - 1) × -100%` con
  `animation-range: cover 100dvh → cover 7 × 100dvh`. Esa ventana empieza cuando
  el escenario queda fijo y termina cuando se libera, así que el recorrido
  horizontal y el scroll vertical avanzan a la vez.
- Una barra de 2 px al pie del escenario usa la misma línea de tiempo
  (`scaleX 0 → 1`). El primer panel muestra el aviso «Desplaza →».
- Los paneles se ajustan al alto disponible en `rail.css`: servicios y proceso
  con `safe center`, contacto y about centrados. Por debajo de 740 px de alto el
  proceso recorta además sus filas para no desbordar.
- Desintegración: cada bloque `.rail-anim` lleva una máscara PNG de grano
  (`public/img/sand-mask.png`, 2400 × 600) con centro sólido y bordes
  granulados. La máscara mide `400% × 100%` y su `mask-position` se anima
  `0% → 50% → 100%` dentro de `rail-flow`; el bloque se erosiona en granos al
  entrar y al salir. El primer panel usa `rail-exit` (`50% → 100%`). Los
  retratos usan la misma máscara con desplazamiento cero para no abrir bordes.
- Transiciones: opacidad `0.4 → 1 → 0.4` y desplazamiento de 16 px (`0` en
  retratos) a lo largo de `[i, i + 2] × 100dvh`; el panel queda alineado en el
  centro. Texto y medios comparten curva y máscara.
- Oclusión de entrada: del segundo panel en adelante, cada `.rail-anim` suma
  `rail-focus` (`blur(5px) → 0`) y cada `.rail-slide` un `::after` con
  `rail-veil` (`opacity 0.35 → 0`, color de página o banda). Ambos comparten
  `--rail` y `[i, i + 1] × 100dvh`: la sección aparece velada y desenfocada y
  recupera el foco al alinear el panel. El hero no la usa.
- Sin snap: se retiró `scroll-snap` porque producía un rebote al salir del
  primer panel. El desplazamiento queda libre y las fades marcan la transición.
- La referencia de CodePen usa `html2canvas` + GSAP + 75 canvases por captura.
  Aquí se sustituye por una máscara de grano CSS: mismo lenguaje visual sin
  dependencias, sin capturar el DOM y sin 75 capas por panel.
- Navegación: un script en `Page.astro` traduce cada `#ancla` a la posición de
  scroll del panel correspondiente (`railTop + i / 6 × (alto - viewport)`),
  mantiene visible el elemento enfocado al tabular y sincroniza `hashchange`.
  La animación sigue siendo 100 % CSS.
- En producción, `animation-timeline` se declara como longhand `!important`
  porque el minificador la pliega en el shorthand `animation`; el shorthand
  resultante no es válido para una view timeline y el navegador lo descarta.
- Fallback: por debajo de 1024 px, con `prefers-reduced-motion: reduce`, sin
  `animation-timeline` o sin scripting, las secciones vuelven a la pila vertical
  con bordes inferiores y anclas nativas. La regla del riel incluye
  `(scripting: enabled)` para no dejar enlaces rotos cuando no hay JavaScript.
- El escenario usa `overflow: clip`, no `hidden`: una caja `hidden` sigue siendo
  desplazable por foco o navegación de fragmento y desalinearía todos los
  paneles. Con la cabecera fija, `html:has(.rail)` anula el `scroll-padding-top`
  global para que las anclas y el riel compartan el mismo origen.

## 12. Pendientes de contenido

- Retrato definitivo y su tratamiento (idealmente recorte con fondo transparente).
- Iconos de proyectos o servicios.
- Enlaces sociales reales (el original usa X, LinkedIn y Product Hunt).
- Testimonios reales; hoy son huecos rotulados.
- Logotipo o wordmark propio; ahora el sitio usa el nombre como marca.
