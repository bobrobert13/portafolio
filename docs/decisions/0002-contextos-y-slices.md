# ADR-0002: Contextos delimitados y slices verticales

## Estado

Aceptado

## Fecha

2026-11-21

## Contexto

El proyecto empezó como una sola página, pero se espera añadir más páginas
(proyectos, servicios, notas). Si todo el markup vive en `src/pages/` y los
componentes compartidos en un directorio global, cada página nueva tiende a
mezclarse con las demás: aparecen componentes usados una sola vez en `infra`,
imports cruzados y copy repartido.

Se necesita una estructura que haga evidente qué pertenece a una página y qué es
compartido, sin introducir un framework de módulos ni un router.

## Decisión

Organizar las páginas como **contextos delimitados** y **slices verticales**:

- Un contexto es una carpeta bajo `src/pages/_contexts/`. El prefijo `_` la
  mantiene fuera del router de Astro.
- Un slice es `<contexto>/<página>/` y contiene todo lo que solo esa página usa:
  `Page.astro`, `sections/` y su `i18n.ts`.
- Los archivos de ruta en `src/pages/{es,en}/` son cableado: importan el slice y le
  pasan el locale.
- `src/infra/` contiene solo lo compartido y no puede importar slices.

## Alternativas consideradas

### Todo en `src/pages` y `src/components`

- Pros: convención por defecto de Astro, sin capas que aprender.
- Contras: el directorio global se convierte en un cajón; no hay límite para saber
  si un componente es de una página o compartido.
- Rechazada: no escala más allá de una página.

### Módulos por tipo (`components/`, `composables/`, `i18n/`) sin contexto

- Pros: agrupación familiar para quien viene de Vue o React.
- Contras: separa por técnica, no por responsabilidad; el copy y las secciones de
  una página quedan dispersos.
- Rechazada: obliga a saltar entre carpetas para cambiar una sola página.

### Monorepo o paquetes internos

- Pros: límites fuertes y build independiente por paquete.
- Contras: complejidad de tooling desproporcionada para un sitio de una persona.
- Rechazada.

## Consecuencias

- Añadir una página tiene un procedimiento explícito y acotado.
- Un componente usado por un solo slice vive en el slice; se promueve a `infra`
  solo cuando aparece un segundo consumidor real.
- La regla `infra` no importa `pages` evita dependencias circulares y mantiene el
  código compartido testeable y reutilizable.
- Los archivos de ruta son triviales y no acumulan lógica.
