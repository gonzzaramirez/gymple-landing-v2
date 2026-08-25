'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Dumbbell, HeartPulse, CalendarRange, Check } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { PillButton } from '@/components/ui/pill-button'
import { cn } from '@/lib/utils'

const MODEL_IMAGE_DIMS: Record<string, { width: number; height: number }> = {
  gimnasio: { width: 1536, height: 2730 },
  pilates: { width: 941, height: 1672 },
}

const models = [
  {
    id: 'gimnasio',
    label: 'Gimnasios',
    icon: Dumbbell,
    title: 'Membresías que se cobran solas',
    description:
      'Planes flexibles con cobranza automática por WhatsApp + MercadoPago. Control de acceso, finanzas y convenios corporativos.',
    bullets: [
      'Cobranza que se empareja sola con MercadoPago',
      'Precios congelados: lo que acordás se mantiene',
      'Convenios corporativos para sumar ingresos sin esfuerzo',
    ],
  },
  {
    id: 'pilates',
    label: 'Pilates',
    icon: HeartPulse,
    title: 'Turnos con cupo, sin enchastre',
    description:
      'Definís días, horarios y cupos por clase. La disponibilidad se actualiza al instante. Ideal para pilates y functional.',
    bullets: [
      'Cupos que se actualizan en tiempo real',
      'Planes atados a días y horarios fijos',
      'Facturación mensual con prorrateo automático',
    ],
  },
  {
    id: 'agenda',
    label: 'Agenda',
    icon: CalendarRange,
    title: 'Clases que se gestionan solas',
    description:
      'Cargá las disciplinas, armá la agenda semanal, y los clientes se anotan según lo que incluye su plan. Sin papeles.',
    bullets: [
      'Agenda semanal ordenada por disciplina y horario',
      'Cada cliente ve su plan y las clases que le corresponden desde el celu',
      'Vos te concentrás en dar clase, el sistema hace el resto',
    ],
  },
] as const

export function BusinessModels() {
  const [active, setActive] = useState(0)
  const model = models[active]

  return (
    <section id="modelos" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Una plataforma, tres modelos
        </span>
        <h2 className="mt-2 text-balance text-3xl font-extrabold leading-tight md:text-4xl">
          Gymple se adapta a tu modelo de negocio
        </h2>
        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
          Gimnasio tradicional, pilates o funcional. Cada uno con su lógica.
        </p>
      </Reveal>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {models.map((m, i) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              'flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all',
              i === active
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                : 'bg-secondary text-muted-foreground hover:text-foreground',
            )}
          >
            <m.icon className="size-4" />
            {m.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid items-center gap-8 lg:grid-cols-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold text-primary">
              <model.icon className="size-3.5" />
              {model.label}
            </span>
            <h3 className="mt-3 text-balance text-2xl font-extrabold leading-tight md:text-3xl">
              {model.title}
            </h3>
            <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {model.description}
            </p>
            <ul className="mt-4 space-y-3">
              {model.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/30 text-primary">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
            <PillButton href="#contacto" className="mt-6">
              Ver cómo funciona
            </PillButton>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${model.id}-mockup`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={`/${model.id}.webp`}
              alt={`Gymple para ${model.label.toLowerCase()}`}
              width={MODEL_IMAGE_DIMS[model.id].width}
              height={MODEL_IMAGE_DIMS[model.id].height}
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
