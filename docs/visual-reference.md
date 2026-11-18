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
| H2 about | `clamp(44px, 5.2vw, 88px)` | 0.95 | −0.035em | 400 |
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
  - about: cabecera a ancho completo + 3 pistas (biografía, biografía, contacto)
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
| 7 | About | biografía + contacto | sin retrato; H2 clamp 44–88 px a 14ch; regla a ancho completo; bio en 2 pistas, contacto en la tercera con regla vertical |
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
- En móvil el retrato del hero pasa a fondo absoluto de 390 px con máscara
  `linear-gradient(#000 25%, transparent 90%)`.
- Ruido fractal SVG al 4.5 % sobre el degradado; evita el aspecto plano.
- Sin ilustraciones decorativas ni iconos fuera de flechas y redes.

### Atmósfera

- Perfil y proyectos llevan un lavado radial estático en una esquina inferior
  (`section-glow`). La esquina alterna (`--glow-x: 0%` / `100%`) y el tinte sale
  de `--glow-accent` (perfil, derecha) y `--glow-plate` (proyectos, izquierda).
- Hero, herramientas y manifiesto llevan orbes difusos animados
  (`ambient-field` + `ambient-orb`), con tres recorridos para que no se repita:
  `ambient-orbit` en el hero (vuelta completa, adaptada del pen de walpolea),
  `ambient-drift` en herramientas (barrido lateral) y `ambient-breathe` en el
  manifiesto (pulso en el sitio).
- El ancho es `150% × --orb-size` y los recorridos traducen en porcentaje del
  propio orbe, así que escalan con la sección. `--orb-opacity` dosifica,
  `blur(9vw)` funde. En claro el tinte son dos colores levantados en luminosidad
  y croma a partir de acento y oliva —ámbar `oklch(.78 .19 55 / .72)` y oliva
  `oklch(.74 .15 130 / .62)`— para que se lea sobre crema sin oscurecer el texto;
  en oscuro sigue el acento/oliva a 40 % / 32 %. Los lavados estáticos conservan
  su propia dosis, más suave (`--glow-accent` / `--glow-plate`: 15 % / 15 % en
  claro; 25 % / 18 % en oscuro).
- La sección necesita `relative isolate`: el campo va a `z-index: -1`, sobre el
  fondo de la sección y bajo la copia. Las pantallas que aún no entraron o ya
  fueron cubiertas pausan sus orbes (`is-offstage`, escrito por `Page.astro`).
- La dosis depende del tema (`theme.css`) y no se coloca bajo texto pequeño:
  el círculo estático vive en la banda inferior vacía y los orbes pasan por
  zonas amplias, no sobre metadatos.

## 8. Movimiento

- Manifiesto: typewriter del titular con caret, disparado por `IntersectionObserver`.
- Herramientas: entrada escalonada de las tarjetas (`kit-enter`, 620 ms), una vez.
- Proyectos: apertura de la carta en diálogo con giro 3D de la portada.
- Perfil: reveal por texto ligado al scroll (§11).
- Ambiente: los orbes de hero, herramientas y manifiesto animan en bucle lento
  (36–88 s) y se pausan fuera de escena. Puro CSS; sin `prefers-reduced-motion`
  por la decisión de mantener el movimiento siempre activo.
- Transiciones de 150–180 ms sobre color, borde y fondo; el hover más visible es
  el teñido de la acción de tarjeta.
- `prefers-reduced-motion`: el reveal de perfil conserva la opacidad y reduce el
  desplazamiento; el resto de animaciones se mantiene.

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
duotono; el about ya no usa imagen: su composición es tipográfica.

### Diferencias intencionales

- El sitio original es solo oscuro; aquí hay claro y oscuro por
  `prefers-color-scheme` y un toggle explícito en la cabecera (`data-theme`
  sobre `<html>`, persistido en `localStorage`). El script del `<head>` aplica la
  preferencia antes de pintar para evitar el flash.
- Sin menú móvil con JavaScript: la navegación se oculta por debajo de `md` y el
  pie cubre los enlaces. En escritorio, las pantallas apiladas añaden un script
  de navegación para anclas, foco y deriva del contenido; el cubrimiento entre
  pantallas no usa JavaScript.
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
  se limitan a 46–52 rem. La cabecera es `fixed` en las pantallas apiladas y
  flota sobre la pantalla translúcida, de modo que la primera llena el escritorio
  de borde a borde.
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
| Pantallas apiladas | `src/infra/styles/slides.css` |
| Toggle de tema | `src/infra/components/ThemeToggle.astro` |
| Flechas | `src/infra/components/ArrowIcon.astro` |
| Retrato provisional | `public/img/portrait-placeholder.jpg` |

## 11. Pantallas apiladas

A partir de 1024 × 720 px el home pasa a pantallas completas: la página se
desplaza en vertical y cada sección queda fija mientras la siguiente la cubre,
el patrón «sticky full page slides» de la referencia de CodePen.

- Estructura: `.slide-stack` contiene 8 `.slide` de `100dvh`. Cada `.slide` es
  `position: sticky; top: 0` y la siguiente se pinta encima por orden de DOM: el
  cubrimiento no necesita JavaScript.
- La cabecera pasa a `position: fixed` y flota sobre la pantalla; cada sección
  conserva su padding superior para no quedar debajo.
- Cada pantalla usa `overflow: clip`, no `hidden`: una caja `hidden` sigue siendo
  desplazable por foco o navegación de fragmento y desalinearía las pantallas.
  `html:has(.slide-stack)` anula el `scroll-padding-top` global para que las
  anclas caigan en el borde superior de su pantalla.
- Ajuste: `slides.css` comprime servicios y proceso con `safe center` y centra
  contacto y manifiesto; perfil se centra desde su propio componente. Por debajo
  de 820 px de alto recorta filas, tarjetas y paddings. El modo solo se activa
  desde 720 px de alto; por debajo las secciones siguen su flujo natural sin
  recortar contenido.
- Profundidad: un script en `Page.astro` escribe `--drift` (−1 cubierta … 1
  entrando) y `--fade` (0 … 0.65) por pantalla; `.slide-anim` los traduce a un
  `translateY` de 2.5 rem y una opacidad. La última pantalla no se desvanece:
  sale con el pie. El scroll sigue siendo el nativo (sin bloquear la rueda); el
  pintado corre en un `requestAnimationFrame` por frame.
- Perfil: único momento coreografiado a nivel de texto. Cada bloque
  (`.profile-reveal`) lee `--drift` con su propio retardo y recorrido: el H2
  entra primero y sale primero, los párrafos le siguen y el contacto es el
  último en aparecer y en irse. Sin pantallas apiladas usa una línea de tiempo
  nativa `view()` (entrada y salida), y con `prefers-reduced-motion` conserva la
  opacidad y reduce el desplazamiento. Sin soporte, el texto queda visible.
- Navegación: los enlaces `#ancla` se resuelven a la pantalla que contiene el
  destino (`stackTop + índice × alto de pantalla`) y actualizan el hash con
  `history.replaceState`; foco, `hashchange` y volver arriba usan las mismas
  posiciones. El alto sale del propio stack porque `offsetTop` incluye el
  desplazamiento sticky de una pantalla ya fijada. Sin JavaScript, las anclas
  nativas caen igual en el borde de la pantalla.
- Volver arriba: botón flotante abajo a la derecha; aparece en la última
  pantalla o al final de la página y sube con scroll suave. La flecha apunta
  hacia arriba.
- Compatibilidad: el cubrimiento usa solo `position: sticky` + `100dvh`. La
  profundidad es JavaScript sobre variables CSS, así que se comporta igual en
  Chrome, Safari y Firefox y nunca deja contenido atenuado si el navegador no
  anima.
- Fallback: por debajo de 1024 px de ancho o 720 px de alto, o sin JavaScript,
  las secciones vuelven a la pila vertical con sus bordes inferiores y alturas
  naturales. El código de scroll comprueba la misma media query para no
  interceptar anclas ni posiciones.

## 12. Pendientes de contenido

- Retrato definitivo y su tratamiento (idealmente recorte con fondo transparente).
- Iconos de proyectos o servicios.
- Enlaces sociales reales (el original usa X, LinkedIn y Product Hunt).
- Testimonios reales; hoy son huecos rotulados.
- Logotipo o wordmark propio; ahora el sitio usa el nombre como marca.
