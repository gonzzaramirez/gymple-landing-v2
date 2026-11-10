'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal } from '@/components/ui/reveal'
import { PillButton } from '@/components/ui/pill-button'
import { BrowserFrame } from '@/components/ui/browser-frame'
import { BorderBeamCard, BorderBeamCardContent } from '@/components/ui/border-beam-card'
import { AnalyticsLineChart } from '@/components/ui/analytics-chart'
import { cn } from '@/lib/utils'

const steps = [
  {
    id: 'dashboard',
    label: 'Panel',
    title: 'Todo el gimnasio en una pantalla',
    desc: 'Socios, cuotas al día, por vencer y vencidas, asistencias e ingresos netos.',
    img: '/demo/demo_dashboard.png',
    url: 'demo.gymple.online/dashboard',
    metric: '54 socios · $80k neto',
  },
  {
    id: 'clients',
    label: 'Clientes',
    title: 'Clientes siempre al día',
    desc: 'Ficha completa, planes, vencimientos y contacto en un clic.',
    img: '/demo/demo_dashboard_clients.png',
    url: 'demo.gymple.online/dashboard/clients',
    metric: 'Búsqueda instantánea',
  },
  {
    id: 'asistencias',
    label: 'Asistencias',
    title: 'Quién vino hoy, sin planilla',
    desc: 'Registro diario y alertas de los que dejan de venir.',
    img: '/demo/demo_dashboard_asistencias.png',
    url: 'demo.gymple.online/dashboard/asistencias',
    metric: 'Control diario',
  },
  {
    id: 'cobros',
    label: 'Cobranza',
    title: 'Renovaciones que se cobran solas',
    desc: 'Por vencer y vencidas con recordatorio por WhatsApp.',
    img: '/demo/demo_dashboard_cobros.png',
    url: 'demo.gymple.online/dashboard/cobros',
    metric: '4 por vencer · 42 vencidas',
  },
  {
    id: 'memberships',
    label: 'Planes',
    title: 'Planes flexibles y congelados',
    desc: 'Mensuales, trimestrales y personalizados que se respetan.',
    img: '/demo/demo_dashboard_memberships.png',
    url: 'demo.gymple.online/dashboard/memberships',
    metric: 'Precio congelado',
  },
  {
    id: 'messages',
    label: 'WhatsApp',
    title: 'Mensajes automáticos',
    desc: 'Vencimientos y avisos sin copiar y pegar.',
    img: '/demo/demo_dashboard_messages.png',
    url: 'demo.gymple.online/dashboard/messages',
    metric: '+40% recupero',
  },
  {
    id: 'reports',
    label: 'Reportes',
    title: 'Números para decidir',
    desc: 'Ingresos, gastos y neto por período.',
    img: '/demo/demo_dashboard_reports.png',
    url: 'demo.gymple.online/dashboard/reports',
    metric: 'Flujo de caja',
  },
]

const cobranzaData = [
  { date: '2026-05-01', label: 'may', value: 42 },
  { date: '2026-06-01', label: 'jun', value: 58 },
  { date: '2026-07-01', label: 'jul', value: 51 },
  { date: '2026-08-01', label: 'ago', value: 67 },
  { date: '2026-09-01', label: 'sep', value: 74 },
  { date: '2026-10-01', label: 'oct', value: 69 },
  { date: '2026-11-01', label: 'nov', value: 80 },
]

export function DemoTour() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const step = steps[active]

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), 5000)
    return () => clearTimeout(t)
  }, [active, paused])

  return (
    <section aria-label="Tour del demo real" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Demo real
        </span>
        <h2 className="mt-2 text-balance text-3xl font-extrabold leading-tight md:text-4xl">
          Mirá Gymple funcionando
        </h2>
        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
          Capturas directas de demo.gymple.online, enmarcadas como producto.
        </p>
      </Reveal>

      <Reveal delay={1}>
        <BorderBeamCard beamSize="md" className="mt-8">
          <BorderBeamCardContent className="bg-card p-4 md:p-6">
            <div
              className="flex flex-wrap items-center justify-between gap-3"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Vistas del demo">
                {steps.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    onClick={() => setActive(i)}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-semibold transition-all',
                      i === active
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                        : 'bg-secondary text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <p className="text-xs font-semibold tabular-nums text-muted-foreground" aria-live="polite">
                {active + 1} / {steps.length}
              </p>
            </div>

            <div
              aria-hidden={!paused}
              className="mt-4 h-1 overflow-hidden rounded-full bg-secondary"
            >
              <motion.div
                key={active + String(paused)}
                initial={{ width: '0%' }}
                animate={{ width: paused ? '0%' : '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
                className="h-full rounded-full bg-accent"
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-primary">
                    {step.metric}
                  </span>
                  <h3 className="mt-3 text-balance text-2xl font-extrabold leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                  {step.id === 'reports' || step.id === 'cobros' ? (
                    <div className="mt-4 rounded-2xl bg-background p-3 ring-1 ring-border">
                      <p className="px-1 text-xs font-semibold text-muted-foreground">
                        Cobranza recuperada (miles $)
                      </p>
                      <AnalyticsLineChart
                        data={cobranzaData}
                        height={180}
                        valueLabel="k$"
                        pinnedIndices={[6]}
                      />
                    </div>
                  ) : null}
                  <div className="mt-4 flex flex-wrap gap-3">
                    <PillButton
                      href="https://demo.gymple.online/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Probar la demo
                    </PillButton>
                    <a
                      href="#contacto"
                      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary"
                    >
                      Hablar por WhatsApp
                    </a>
                  </div>
                </div>
                <BrowserFrame
                  src={step.img}
                  alt={`Vista ${step.label} del demo real de Gymple`}
                  url={step.url}
                  imgClassName="aspect-[16/10]"
                />
              </motion.div>
            </AnimatePresence>
          </BorderBeamCardContent>
        </BorderBeamCard>
      </Reveal>
    </section>
  )
}
