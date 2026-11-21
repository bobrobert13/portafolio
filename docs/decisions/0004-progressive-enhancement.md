# ADR-0004: Mejora progresiva y cero hidratación

## Estado

Aceptado

## Fecha

2026-11-21

## Contexto

El diseño del home incluye pantallas apiladas, tema claro/oscuro, animaciones de
entrada, un grafo de proceso animado y un diálogo de detalle de proyectos. Nada
de eso es contenido: si el JavaScript falla, el visitante debe seguir leyendo el
sitio. A la vez, el sitio compite por velocidad y simplicidad, así que cada script
tiene un costo que debe justificarse.

## Decisión

Adoptar **mejora progresiva** como regla de arquitectura:

1. El HTML generado contiene todo el contenido y funciona sin JavaScript.
2. Ningún componente Vue se hidrata; no se añade `client:*`.
3. La interactividad se implementa con scripts de Astro pequeños y específicos,
   registrados en la tabla de `docs/system-design.md` §6.
4. El CSS resuelve la estructura: las pantallas apiladas usan `position: sticky` y
   `100dvh`; el modo apilado solo se activa desde `1024 × 720`.
5. Los scripts consultan las mismas media queries que el CSS y se desactivan
   cuando la función no aplica.
6. El estado persistido (tema) se aplica antes del primer pintado para evitar
   parpadeo, con un script inline mínimo en `<head>`.

## Alternativas consideradas

### Islas Vue para cada pieza interactiva

- Pros: estado y eventos con la ergonomía del framework.
- Contras: hidratación, runtime de Vue y un salto de modelo para animaciones que
  son esencialmente DOM y CSS.
- Rechazada: el costo no se paga con la complejidad actual.

### Renunciar a la interactividad

- Pros: cero JavaScript, máxima simplicidad.
- Contras: se pierden el tema explícito, la navegación entre pantallas, el detalle
  de proyectos y las animaciones que forman parte de la identidad.
- Rechazada: hay funciones con valor real, siempre que degraden.

### Librería de animación (GSAP, Framer Motion)

- Pros: coreografías complejas con menos código propio.
- Contras: peso, dependencia y una API que oculta el costo real por frame.
- Rechazada: `IntersectionObserver`, variables CSS y `requestAnimationFrame`
  cubren el caso.

## Consecuencias

- El contenido nunca depende de un script. Sin JavaScript se pierden el selector
  de tema, el navegador de secciones y el detalle de proyectos (un `<button>` que
  abre un `<dialog>`); el contenido, el tema del sistema y las pantallas apiladas
  permanecen.
- La tabla de scripts de §6 es la lista cerrada de JavaScript permitido. Añadir
  otro exige justificarlo y actualizar la tabla.
- Los scripts deben respetar puntero fino, `prefers-reduced-motion` y paneles con
  scroll propio; `smooth-scroll.ts` lo encapsula.
- El build no debe contener scripts de hidratación de Vue; su aparición es una
  regresión.
