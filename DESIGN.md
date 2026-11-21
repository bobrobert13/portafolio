---
name: Trebor Portfolio
description: Portafolio editorial técnico, bilingüe y estático.
colors:
  paper: "#eedfc7"
  paper-band: "#e6d3b4"
  paper-low: "#e3cfae"
  ink: "#533416"
  ink-muted: "#6e5236"
  ink-subtle: "#7a5e42"
  rule: "#d9c3a0"
  accent: "#ce7f20"
  accent-deep: "#7a4a15"
  accent-ink: "#241708"
  plate: "#607938"
  logo-plate: "#fbf7ef"
  night-paper: "#241708"
  night-band: "#2c1c0c"
  night-low: "#34220e"
  night-ink: "#eedfc7"
  night-muted: "#c9b492"
  night-subtle: "#ad9878"
typography:
  display:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.6875rem, 5.35vw, 7rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.875rem, 3.1vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.032em"
  title:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.1em"
  lead:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  body-lg:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
  panel-title:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.028em"
  panel-title-lg:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.028em"
  manifesto-word:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.7vw, 1.55rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  stat:
    fontFamily: "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace"
    fontSize: "1.4375rem"
    fontWeight: 400
    lineHeight: 1.25
  heading-sm:
    fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  meta:
    fontFamily: "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: 1
  micro:
    fontFamily: "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.5625rem"
    fontWeight: 400
    lineHeight: 1
  mark:
    fontFamily: "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace"
    fontSize: "0.5rem"
    fontWeight: 400
    lineHeight: 1
rounded:
  xs: "5px"
  nav: "6px"
  cta: "7px"
  sm: "8px"
  btn: "9px"
  card: "10px"
spacing:
  gutter-mobile: "18px"
  gutter-tablet: "24px"
  gutter-desktop: "44px"
  section-top: "76px"
  section-bottom: "68px"
  card: "16px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.btn}"
    padding: "12px 18px"
    height: "44px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "12px 18px"
    height: "44px"
  cta-header:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.cta}"
    padding: "7px 14px"
    height: "32px"
  tag:
    backgroundColor: "{colors.paper-low}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px"
  index-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.nav}"
    padding: "9px 9px 9px 10px"
  index-row-active:
    backgroundColor: "{colors.paper-low}"
    textColor: "{colors.ink}"
    rounded: "{rounded.nav}"
    padding: "9px 9px 9px 10px"
---

# Design System: Trebor Portfolio

## Overview

**Creative North Star: "El cuaderno de obra"**

El sistema se comporta como un cuaderno de obra: papel cálido, márgenes generosos, reglas de 1 px que separan sin decorar y anotaciones en monoespaciada que numeran lo que importa. No hay superficies flotantes ni brillos. La jerarquía la llevan el tamaño y el espacio, no la sombra.

La calidez viene del material, no del adorno. El fondo es crema de papel y la tinta es cacao; el naranja funciona como marca de obra sobre el papel y el oliva como segunda voz. El modo oscuro invierte esa relación a cacao profundo y crema, sin volverse negro ni azul.

El tono es editorial y técnico al mismo tiempo: titulares grandes y ajustados, cuerpo corto, etiquetas mono en mayúscula y cifras que se leen como medidas. Los componentes son precisos y secos: borde de 1 px, radio contenido, sin sombra difusa, y el estado se nota en el borde y el fondo.

**Key Characteristics:**
- Papel cálido, tinta cacao, naranja de obra y oliva como acentos.
- Reglas de 1 px como estructura; el hueco de una rejilla puede ser la línea.
- Titulares grandes con peso regular y tracking negativo, no negritas pesadas.
- Monoespaciada reservada a etiquetas, cifras, metadatos y atajos.
- Plano por defecto: la profundidad viene del tono y del borde, no de la sombra.

## Colors

Paleta de papel y pigmento: dos neutros cálidos, un acento naranja y un verde oliva de segunda voz.

### Primary
- **Naranja de obra** (`#ce7f20`): relleno del botón primario, punto de estado, regla activa del índice de empresas, cifras de acento. Nunca como texto pequeño sobre papel.
- **Naranja profundo** (`#7a4a15`): la variante para texto pequeño sobre crema. Sustituye al naranja cuando el texto baja de 18 px, porque el vivo no llega a 4.5:1.

### Secondary
- **Oliva de archivo** (`#607938`): segunda voz del sistema; fondo del retrato, lavado de la sección de proyectos y tinte de los orbes ambientales.

### Neutral
- **Papel** (`#eedfc7`): fondo de página y de las fichas.
- **Papel de banda** (`#e6d3b4`): secciones alternas y tapas de la ficha.
- **Papel bajo** (`#e3cfae`): superficie seleccionada del índice, campos y pliegues.
- **Tinta** (`#533416`): texto principal y bordes de énfasis.
- **Tinta apagada** (`#6e5236`): cuerpo secundario, descripciones y metadatos.
- **Tinta sutil** (`#7a5e42`): numeración, periodos y etiquetas de menor peso.
- **Regla** (`#d9c3a0`): hairlines de 1 px, bordes de tarjeta y separadores.
- **Cacao nocturno** (`#241708`): fondo del modo oscuro. Nunca `#000`.
- **Crema nocturna** (`#eedfc7`): texto del modo oscuro, el mismo valor que el papel en claro.

### Named Rules
**The Two Oranges Rule.** El naranja vivo se usa para rellenos y marcas grandes. Para texto pequeño se cambia al naranja profundo. Nunca se negocia el contraste por mantener el tono.

**The Warm Paper Rule.** No hay blanco ni negro puros. El fondo claro es crema y el oscuro es cacao; una superficie nueva que no salga de `paper`, `paper-band` o `paper-low` está fuera del sistema.

## Typography

**Display Font:** DM Sans (con Helvetica Neue, Arial)
**Body Font:** DM Sans
**Label/Mono Font:** JetBrains Mono (con ui-monospace, Menlo, Consolas)

**Character:** DM Sans aporta una geometría humanista que aguanta titulares muy grandes sin volverse fría. JetBrains Mono numera, etiqueta y mide; aparece poco y por eso pesa.

### Hierarchy
- **Display** (400, `clamp(2.6875rem, 5.35vw, 7rem)`, 1.0, `-0.04em`): solo el titular del hero. El peso regular es deliberado: la escala y el tracking hacen el trabajo.
- **Headline** (400, `clamp(1.875rem, 3.1vw, 3.5rem)`, 1.05, `-0.032em`): títulos de sección, máx. 672 px de ancho.
- **Title** (500, 1.25rem, 1.15, `-0.02em`): títulos de tarjeta.
- **Subtitle** (600, 0.9375rem, 1.25, `-0.015em`): nombre de empresa en el índice, título de proyecto y de solución.
- **Panel title** (600, 1.5rem en móvil y 1.75rem en escritorio, 1.1, `-0.028em`): nombre de la empresa en la ficha.
- **Manifesto word** (400, `clamp(1.15rem, 1.7vw, 1.55rem)`, 1.1, `-0.025em`): nombre de cada estación del manifiesto.
- **Stat** (mono, 400, 1.4375rem, 1.25): cifra del hero.
- **Heading SM** (400, 1.375rem, 1.2, `-0.02em`): subcabeza de contacto y líneas del panel.
- **Body** (400, 1rem, 1.6): descripciones y párrafos; máximo 600 px de línea.
- **Lead** (400, 1.0625rem, 1.7): descripción de sección en escritorio.
- **Body LG** (400, 0.9375rem, 1.6): contexto de empresa y notas de grupo.
- **Body MD** (400, 0.8125rem, 1.6): contexto de la ficha.
- **Body SM** (400, 0.75rem, 1.5): detalle de proyecto, bullets y título de solución.
- **Label** (400, 0.6875rem, 1.5, `0.1em`, mayúsculas): eyebrows y etiquetas de columna.
- **Meta** (mono, 400, 0.625rem): periodo, rubro, etiquetas y conteos.
- **Micro** (mono, 400, 0.5625rem): numeración de proyecto y atajo de teclado.
- **Mark** (mono, 400, 0.5rem): monograma dentro del chip móvil.

### Named Rules
**The One Caps Rule.** Solo los eyebrows van en mayúscula. Cualquier otro texto en mayúscula sostenida rompe la voz.

**The Negative Tracking Rule.** El tracking se aprieta al crecer: `-0.02em` en título, `-0.032em` en titular de sección, `-0.04em` en display. Nunca se abre el tracking de un titular.

## Layout

Marco a sangre completa, sin borde exterior ni tope de 1440 px. El contenido respira con el gutter, no con un contenedor centrado: 18 px en móvil, 24 px desde 768, 44 px desde 1024.

Las secciones se separan con una hairline inferior. Desde 1024 × 720 px el home se convierte en ocho pantallas apiladas de `100dvh` con `position: sticky`; por debajo recupera el flujo vertical. Dentro de cada pantalla el ritmo es 76 px arriba y 68 px abajo en escritorio, comprimido a 64 y 48 en portátiles bajos.

Rejillas observadas: hero `1.05fr / 0.95fr`; proyectos `minmax(14.5rem, 18rem) / 1fr`; kit en mosaico absoluto de tres columnas; servicios y manifiesto en tres columnas. Cuando dos bloques comparten borde, la rejilla usa `gap: 1px` sobre fondo `rule`, de modo que el hueco es la línea.

Textos largos se limitan a 42–54 rem. Ninguna columna de lectura pasa de 672 px.

## Elevation & Depth

El sistema es plano. No hay sombras difusas ni tarjetas flotantes. La profundidad se construye con tres recursos: capas tonales (`paper`, `paper-band`, `paper-low`), bordes de 1 px y un único brillo interior en los botones rellenos.

Hay dos excepciones justificadas: la cabecera fija usa `backdrop-blur` con fondo de papel al 85 %, y la pantalla que se desliza sobre otra deja una sombra interior de 20 px en su borde superior, que es una costura, no una elevación.

### Shadow Vocabulary
- **Inset de botón** (`inset 0 1px 0 0 rgb(255 255 255 / 0.16)`): única sombra del sistema; da cuerpo al botón primario y al CTA de cabecera.
- **Costura de pantalla** (`inset 0 20px 30px -26px rgb(0 0 0 / 0.5)`): marca el borde de la pantalla que acaba de entrar.

### Named Rules
**The Flat-by-Default Rule.** Una superficie nueva no lleva sombra. Si necesita separarse, se le da un borde de 1 px o un tono distinto.

## Shapes

Forma contenida y precisa. Radios pequeños: 5 px para etiquetas, 6 px para navegación y logo, 7 px para el CTA de cabecera, 8 px para campos, 9 px para botones, 10 px para tarjetas y fichas.

Casi todo es rectangular con esquinas apenas suavizadas. El círculo se reserva para puntos de estado de 3–5 px, el botón de tema y la píldora flotante de navegación entre pantallas. Los bordes son de 1 px salvo la regla activa del índice, que usa 2 px para marcar selección.

No hay recortes decorativos. `overflow: clip` aparece solo donde una pantalla apilada debe contener su contenido.

## Components

### Buttons
- **Shape:** rectángulo suavizado (`9px`), altura mínima 44 px.
- **Primary:** relleno naranja, texto cacao oscuro, peso 700, brillo interior de 1 px; al hover sube el brillo un 5 %.
- **Ghost:** sin fondo, borde `rule`, texto tinta; al hover el borde sube a tinta al 25 % y aparece un fondo de tinta al 5 %.
- **Focus:** contorno de 2 px en acento con 3 px de separación.

### Chips and Tags
- **Style:** mono de 10–11 px, fondo de tinta al 3 %, borde `rule`, radio 5 px, padding 2 × 8 px.
- **State:** no son interactivos en el sitio; comunican stack y categoría, no filtros.

### Cards and Panels
- **Corner Style:** 10 px.
- **Background:** papel; la superficie seleccionada usa papel bajo.
- **Border:** 1 px `rule`; el borde activo pasa a acento.
- **Internal Padding:** 16 px en móvil, 20–24 px en escritorio.
- **Shadow:** ninguna.

### Company Index Row
- **Shape:** fila de cuatro columnas (número, logo, nombre y metadato, conteo), borde izquierdo de 2 px transparente.
- **Default:** fondo transparente, borde invisible.
- **Selected:** fondo `paper-low`, borde izquierdo naranja, nombre en peso 600.
- **Hover:** fondo `paper-low` al 55 %.
- El cambio es un grupo de radios nativos; el panel activo se muestra con `:has()`. Sin JavaScript.

### Company Panel
- **Shape:** ficha de 10 px con cabecera fija y cuerpo con scroll propio.
- **Header:** logo de 48 px sobre placa clara, nombre, rubro, periodo y una frase de contexto.
- **Body:** dos bloques de proyecto separados por hairline; cada uno con participación, soluciones y stack.
- **Scroll:** fino y tonal; solo aparece cuando la pantalla no puede crecer más.

### Navigation
- **Header:** 62 px de alto, fijo sobre las pantallas, fondo de papel al 85 % con desenfoque.
- **Links:** 13 px, radio 6 px, texto apagado; hover con fondo de tinta al 5 % y texto tinta.
- **Locale:** mono de 11 px separado por `/`; el idioma actual hereda el color de tinta y el resto queda sutil.
- **Theme toggle:** círculo de 32 px con borde `rule`.

### Signature: Shelf Grid
- **Shape:** una rejilla de celdas con `gap: 1px` sobre fondo `rule`, borde exterior de 1 px y radio de 10 px. El hueco es la línea.
- **Cell:** número y conteo en mono arriba, título en 1.25rem, nota en 0.75rem y los ítems al pie como texto mono de 11 px separado por `·`, no como chips.
- **Density:** tres columnas en escritorio, dos desde 640 px y una en móvil. Sin posicionamiento absoluto y sin alturas fijas.
- **Open state:** cada celda es un radio; la activa tiñe el fondo, marca el borde izquierdo en acento y abre una banda de detalle debajo con nombre y uso de cada elemento. El resto de celdas sigue visible.
- **Use:** el estante de herramientas. El mismo patrón sirve para cualquier inventario de seis a doce elementos.

### Scroll Navigation
- **Jump:** glide por tiempo de 420–900 ms con curva cúbica y aterrizaje exacto; la rueda y las teclas conservan el muelle exponencial.
- **Blur:** 2.5 px de desenfoque de fondo sobre todo el viewport durante el salto, con fundido de 200 ms. En el camino nativo se limita a puntero fino.
- **Hash:** una recarga con hash vuelve a colocar la pantalla que contiene el destino después del layout, las fuentes y el load.

### Contact Form
- **Shape:** tres campos de 40 px, etiquetas mono encima, radio 8 px y fondo `paper-band`; botón primario de 42 px.
- **Behavior:** validación nativa y línea de estado `aria-live`. Hasta conectar EmailJS compone un `mailto:` con nombre, correo y mensaje; el enlace directo queda debajo y funciona sin JavaScript.
- **Scope:** ocupa la columna derecha de «Trabajemos juntos», sin tarjeta. Se renderiza siempre; con `PUBLIC_CONTACT_EMAIL` compone el correo y sin ella muestra el aviso de no configurado.

### Signature: Conversation Ledger
- **Shape:** cada fase abre con una regla de 1 px, su verbo y la entrega en mono a la derecha. Debajo, dos columnas Tú/Yo separadas por una hairline.
- **Motion:** la regla se dibuja de izquierda a derecha y la fila entra con 90 ms de compás; el cierre llega último. Sin JavaScript las cuatro fases están visibles.
- **Use:** el proceso. La columna del cliente nunca se omite.

### Signature: Manifesto Spine
- **Shape:** un eje vertical de 1 px en `rule` oscurecido, seis estaciones alternas y un ramal discontinuo de 4/7 px que une cada una al eje.
- **Motion:** el eje se dibuja con `scaleY`, las estaciones entran en cascada de 90 ms y un pulso de acento de 5 px lo recorre cada 3.2 s. Sin JavaScript las seis estaciones están visibles.
- **Use:** el manifiesto. No lleva números; el orden es de lectura, no de secuencia.

### Signature: Eyebrow Label
Mono de 11 px, mayúsculas, tracking `0.1em`, color sutil. Es la única mayúscula del sistema y actúa como número de página del cuaderno: nombra la categoría sin competir con el titular.

## Do's and Don'ts

### Do:
- **Do** usar `paper`, `paper-band` y `paper-low` para separar superficies antes de recurrir a un borde.
- **Do** mantener las hairlines en 1 px y dejar que el hueco de una rejilla haga de línea.
- **Do** apretar el tracking a medida que crece el titular.
- **Do** cambiar al naranja profundo cuando el acento sea texto pequeño.
- **Do** reservar la monoespaciada para etiquetas, cifras y metadatos.
- **Do** dejar que la ficha de proyecto scrollee por dentro antes que romper la pantalla.

### Don't:
- **Don't** añadir sombras difusas ni tarjetas flotantes.
- **Don't** usar blanco puro, negro puro ni azul de interfaz.
- **Don't** poner el naranja vivo como texto sobre crema por debajo de 18 px.
- **Don't** abrir el tracking de un titular ni poner un titular en mayúsculas.
- **Don't** usar radios mayores de 10 px ni convertir tarjetas en píldoras.
- **Don't** introducir iconos fuera de las flechas y los dos iconos de tema.
