---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface: portafolio (página única)

Scope: `src/pages/index.astro` y sus componentes. Mode: Persuade (el visitante debe contactar y descargar el CV).
Audiencia: reclutadores, entrevistadores técnicos y clientes freelance que revisan en pocos minutos.
Restricciones: contenido real de `src/data/`; sin métricas, testimonios ni disponibilidad inventados; tema según el sistema con toggle; dirección fijada por el usuario: liquid glass de Apple, modesto y sencillo, más abierto.

## Direction contract

THESIS: La página es una tarjeta de visita de vidrio sobre luz de color: el vidrio solo donde se actúa (navegación y contacto) y el resto abierto, sin cajas. Rechaza el portafolio dev oscuro con brillos neón, eyebrows en mono y cuadrículas de tarjetas iguales.

OWN-WORLD: Fondo claro #f4f4f8 (oscuro #0d0d14) con tres campos de color difuminados que derivan muy despacio: violeta #8758FF, cielo #5CB8E4 y lila. Vidrio: blanco translúcido con backdrop blur+saturate, borde de luz interior arriba, sombra suave desplazada, radios grandes (cápsulas y 28px). Tipografía Onest, una sola familia; sin mono decorativo.

STORY: En segundos el visitante sabe quién es (desarrollador web, 3 años, C#/.NET/Vue 3), ve que integra IA en su trabajo, revisa proyectos y lo contacta o descarga el CV desde la tarjeta.

FIRST VIEWPORT: Cápsula de navegación flotante centrada arriba. Izquierda (≈7/12): h1 "Desarrollador web." grande, bio a 60ch, píldoras de vidrio con el stack principal. Derecha (≈5/12): tarjeta de contacto de vidrio con monograma JH, nombre, años de experiencia (el rol ya lo dice el h1), filas Correo/LinkedIn/GitHub tipo lista iOS y botón principal "Descargar CV" en violeta. Signature: la cápsula se compacta al hacer scroll y el vidrio lleva un reflejo especular que sigue al puntero.

FORM: Liquid glass (fijado por el usuario, sin roll); posición 1 por pin del brief.
seed: none (roll skipped: direction pinned by the user, concept-seed not run)

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
