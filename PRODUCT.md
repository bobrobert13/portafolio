# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Personas y negocios que necesitan un sitio estático, bilingüe y mantenible, y buscan a alguien que resuelva diseño y código en un solo proceso.
- Reclutadores técnicos y equipos de producto que revisan el portafolio para evaluar experiencia, stack y criterio.
- Ambos llegan al mismo sitio, en español por defecto o en inglés. La sección «Experiencia y soluciones» debe servir a los dos sin optimizar para uno solo.

## Product Purpose

Portafolio personal bilingüe que reúne el trabajo, las decisiones técnicas y los servicios ofrecidos. Existe para que un visitante entienda en pocos segundos qué se construye y cómo se trabaja, y para que dé el siguiente paso: escribir por correo o abrir un caso concreto. El éxito de la sección de proyectos es que el visitante pueda situar cinco empresas reales, entender su participación en cada proyecto y reconocer las soluciones aplicadas.

## Positioning

Sitios estáticos, bilingües y accesibles generados en el build con Astro y Vue, sin hidratación: el despliegue es un directorio de archivos, el rendimiento es una restricción de diseño y la documentación es parte del entregable. El stack se puede copiar; lo que no se copia es el criterio para elegir los límites, la degradación sin JavaScript y el hábito de dejar el proyecto editable sin el autor.

## Operating Context

- Un solo mantenedor. El copy vive en `src/pages/_contexts/home/index/i18n.ts` y se edita a mano; no hay CMS, base de datos ni backend.
- El contenido es real pero delgado: por cada proyecto existen descripción, responsabilidades, soluciones y stack. No existen métricas de negocio, de rendimiento ni de conversión.
- Las cinco empresas —Cuantia, OrinocoDev, glgfreight, Colegio Simón Bolívar y OrinocoIO— son reales y verificables.
- La entrega se valida con `npm run build` y revisión manual de `/es/` y `/en/`; no hay tests, linter ni `astro check`.

## Capabilities and Constraints

- Astro estático con prefijo de locale; ocho secciones del home en pantallas apiladas de `100dvh` desde 1024 × 720 px.
- Cero hidratación: Vue solo en build. Los comportamientos son scripts explícitos y pequeños (tema, scroll, cascada del proceso, cascada del manifiesto, formulario de contacto, entrada del kit); el navegador de empresas no usa JavaScript.
- Sin router, estado global, content collections, tests ni comprobación de tipos independiente.
- Tokens en `src/infra/styles/theme.css`; utilidades en `utilities.css`; sin `tailwind.config.js`.
- La sección de proyectos debe caber en una pantalla de escritorio y volver al flujo vertical por debajo de 1024 × 720 px.
- Todo texto y toda ruta existen en `es` y en `en`.

## Brand Commitments

- Nombre «Trebor»; voz editorial técnica, primera persona, frases cortas y sin adjetivos de relleno.
- Español por defecto, inglés completo.
- Paleta cocoa, crema, naranja y oliva; Archivo y JetBrains Mono autoalojadas.
- Marco editorial sin sombras difusas: la profundidad viene de bordes y fondos. Las flechas son el único icono.

## Evidence on Hand

- Copy bilingüe de cinco empresas con dos proyectos cada una: descripción, participación, soluciones estrella y stack.
- Retrato provisional en `public/img/portrait-placeholder.jpg`.
- Ausencias que ninguna propuesta debe inventar: métricas de resultados, testimonios, logotipos de clientes, cifras de rendimiento.

## Product Principles

1. El contenido existe sin JavaScript; el comportamiento es una mejora.
2. Los límites del sistema son la unidad de diseño: capas, tokens y contratos antes del componente.
3. Bilingüe desde el inicio, no como traducción posterior.
4. Documentar es parte de entregar; el proyecto debe seguir en pie sin el autor.
5. La velocidad se decide antes de la primera línea y se nota en el coste de cada cambio.

## Accessibility & Inclusion

HTML semántico, navegación por teclado y contraste comprobado. El diálogo de proyectos gestiona foco y cierre. `prefers-reduced-motion` desactiva el suavizado de rueda y reduce el desplazamiento del perfil; las animaciones ambientales se mantienen por decisión explícita.
