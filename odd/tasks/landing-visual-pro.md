## Landing visual pro — capturas feas a experiencia premium

Objective: Reemplazar presentación cruda de capturas demo por marcos browser premium, glow, chips flotantes y chart de cobranza con Cult UI ya instalado. Branch: feat/landing-visual-pro. Delivery: single-pr. Runner: `npm run build` + `node --test tests/build.test.mjs`.

## Specs

S1: "Esta medio feo las capturas, metele mas cosas de la libreria, para aumentar el nivel de experiencia de la landing"

Alcance autorizado: nuevos wrappers en `components/ui/`, edits en `src/components/DemoTour.tsx` y `Hero.tsx`, uso de `AnalyticsLineChart`, `BorderBeamCard`, `RollingNumber`. No tocar datos ni auth. Imágenes existentes en `public/demo/*.png`.

## Tasks

- [x] V1 (S1, inline): BrowserFrame premium + glow + URL demo
- [x] V2 (S1, inline): DemoTour con BrowserFrame + progreso + chart cobranza
- [x] V3 (S1, inline): Hero con BrowserFrame + chips flotantes
- [x] V4 (S1, inline): Build/test + commit en feature branch

## Log

L1 (2026-11-10): "Esta medio feo las capturas, metele mas cosas de la libreria, para aumentar el nivel de experiencia de la landing"
L2: Rama feat/landing-visual-pro desde main 60c78f0. Cult UI instalado (7 componentes). Las PNG 1366x900 se ven crudas sin marco ni contexto.
L3: BrowserFrame + DemoTour con BorderBeamCard, progreso autoplay, chart cobranza con AnalyticsLineChart y métricas por vista. Hero con BrowserFrame y chips Neto $80k / Cuotas +6. Build 5.37s, 12/12 tests.
