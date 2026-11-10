## Landing nivel pro con Cult UI

Objective: Integrar componentes Cult UI compatibles con React+shadcn+Motion en gymple-landing-v2 para hero analytics, tour demo, tabs, logos y cards. Branch: feat/landing-audit-ux-fixes (continúa). Delivery: single-pr. Runner: `npm run build` + `node --test tests/build.test.mjs`.

## Specs

S1: "usa alguna libreria o algo para las imagenes me gusta lo que tiene https://www.cult-ui.com/docs/components"
S2: "entra ahi y explora que nos puede servir para que la landing de gymple sea nivel pro"
S3: "Si sumale todo"

Alcance autorizado: instalar vía `npx shadcn@latest add @cult-ui/...`, agregar wrappers en `components/ui/`, integrar en `src/components/`, usar capturas `public/demo/*.png`. No push a main directo.

## Tasks

- [x] C1 (S3, inline): Instalar cult-ui base (hero-analytics, feature-carousel, logo-carousel, direction-aware-tabs, border-beam-card, analytics-chart, browser-window, rolling-number)
- [x] C2 (S3, inline): Hero analytics + BrowserWindow con demo real
- [x] C3 (S3, inline): FeatureCarousel tour con 11 capturas demo
- [x] C4 (S3, inline): DirectionAwareTabs en BusinessModels
- [x] C5 (S3, inline): LogoCarousel + BorderBeamCard + RollingNumber en Stats/Clients
- [x] C6 (S3, inline): Build/test + commit en feature branch

## Log

L1 (2026-11-10): "Si sumale todo"
L2: Continúa sobre feat/landing-audit-ux-fixes. motion 12.42.2 ya instalado. public/demo/ con 11 PNG sin commitear se versiona en C1.
L3: Instalados 7 componentes cult-ui (hero-analytics, feature-carousel, logo-carousel, direction-aware-tabs, border-beam-card, analytics-chart, rolling-number). browser-window no existe en registry, se usa frame custom con ring. feature-carousel usa next/image incompatible con Astro, se implementa DemoTour custom con /demo/*.png. Integrados: RollingNumber en Stats, DirectionAwareTabs en BusinessModels, BorderBeamCard en Features, DemoTour en index. Build 5.37s, 12/12 tests.
