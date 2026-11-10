'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal } from '@/components/ui/reveal'
import { PillButton } from '@/components/ui/pill-button'
import { cn } from '@/lib/utils'

const steps = [
  {
    id: 'dashboard',
    label: 'Panel',
    title: 'Todo el gimnasio en una pantalla',
    desc: 'Socios, cuotas al día, por vencer y vencidas, asistencias e ingresos netos.',
    img: '/demo/demo_dashboard.png',
  },
  {
    id: 'clients',
    label: 'Clientes',
    title: 'Clientes siempre al día',
    desc: 'Ficha completa, planes, vencimientos y contacto en un clic.',
    img: '/demo/demo_dashboard_clients.png',
  },
  {
    id: 'asistencias',
    label: 'Asistencias',
    title: 'Quién vino hoy, sin planilla',
    desc: 'Registro diario y alertas de los que dejan de venir.',
    img: '/demo/demo_dashboard_asistencias.png',
  },
  {
    id: 'cobros',
    label: 'Cobranza',
    title: 'Renovaciones que se cobran solas',
    desc: 'Por vencer y vencidas con recordatorio por WhatsApp.',
    img: '/demo/demo_dashboard_cobros.png',
  },
  {
    id: 'memberships',
    label: 'Planes',
    title: 'Planes flexibles y congelados',
    desc: 'Mensuales, trimestrales y personalizados que se respetan.',
    img: '/demo/demo_dashboard_memberships.png',
  },
  {
    id: 'messages',
    label: 'WhatsApp',
    title: 'Mensajes automáticos',
    desc: 'Vencimientos y avisos sin copiar y pegar.',
    img: '/demo/demo_dashboard_messages.png',
  },
  {
    id: 'reports',
    label: 'Reportes',
    title: 'Números para decidir',
    desc: 'Ingresos, gastos y neto por período.',
    img: '/demo/demo_dashboard_reports.png',
  },
]

export function DemoTour() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const step = steps[active]

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), 4000)
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
          Capturas directas de demo.gymple.online, sin mockups.
        </p>
      </Reveal>

      <div
        className="mt-6 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Vistas del demo"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
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

      <div className="mt-6 overflow-hidden rounded-3xl bg-card ring-1 ring-border">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid items-center gap-6 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8"
          >
            <div>
              <h3 className="text-balance text-2xl font-extrabold leading-tight">{step.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{step.desc}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <PillButton href="https://demo.gymple.online/dashboard" target="_blank" rel="noopener noreferrer">
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
            <div className="overflow-hidden rounded-2xl ring-1 ring-border">
              <img
                src={step.img}
                alt={`Vista ${step.label} del demo real de Gymple`}
                width={1366}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
