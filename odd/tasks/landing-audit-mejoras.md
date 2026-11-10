## Landing auditoría y mejoras UX/UI — demo + repo

Objective: Auditar gymple.online y demo, implementar fixes y mejoras con capturas reales en gymple-landing-v2. Branch: feat/landing-audit-ux-fixes. Delivery: single-pr. Runner: `npm run build` + `node --test tests/build.test.mjs`.

## Specs

S1: "entra a https://demo.gymple.online/dashboard y saca las capturas que quieras."
S2: "mejora todo y audita todo e implementa todo en el repo de la landing"
S3: "PS C:\\Users\\Gonza\\Desktop\\gymple-landing-v2>"
S4: "despues comitea y pushea"

Alcance autorizado: leer demo y landing, agregar capturas en `public/`, editar componentes en `src/components/`, verificar con build/test, commitear y pushear en feature branch. No push a main directo.

## Tasks

- [x] T1 (S1, inline): Capturas demo dashboard -> `public/demo-*.webp`, verificar archivos
- [x] T2 (S2, inline): Fix BusinessModels crash agenda + tabs accesibles
- [x] T3 (S2, inline): Fix Stats contadores 0 inicial + reduced-motion
- [x] T4 (S2, inline): Fix Navbar Ingresar + Cta href + WhatsApp consistente
- [x] T5 (S1+S2, inline): Hero con captura real + PlatformSection imágenes
- [x] T6 (S2, inline): Carousel/Marquee a11y + reduced-motion
- [ ] T7 (S4, inline): Build/test + commit + push feature branch

## Log

L1 (2026-11-10): "entra a https://demo.gymple.online/dashboard y saca las capturas que quieras. y mejora todo y audita todo e implementa todo en el repo de la landing PS C:\\Users\\Gonza\\Desktop\\gymple-landing-v2> despues comitea y pushea"
L2: Branch feat/landing-audit-ux-fixes creada desde main limpio. Auditoría: BusinessModels sin dims para agenda crashea al clickear Agenda y desmonta #modelos (nav roto aparente); Stats pinta 0 inicial; Cta Probar gratis href="#"; Ingresar lleva a #contacto; faltan capturas reales en hero.
L3: Build OK 5.56s, 12/12 tests pass. dist contiene demo-dashboard-hero.png x1, demo-dashboard.png x1, demo.gymple.online x3, href="#" x0.
