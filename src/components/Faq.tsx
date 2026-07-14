'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal } from '@/components/ui/reveal'

const faqs = [
  {
    q: '¿Qué es Gymple y para quién es?',
    a: 'Gymple es un software SaaS todo en uno para gimnasios, centros de entrenamiento, boxes de CrossFit, estudios de pilates y clubes deportivos. Te permite gestionar clientes, cobrar cuotas, enviar recordatorios por WhatsApp y llevar las finanzas de tu negocio, todo desde la nube.',
  },
  {
    q: '¿Cómo funcionan los recordatorios de WhatsApp?',
    a: 'Conectás tu WhatsApp escaneando un código QR. El sistema detecta automáticamente los vencimientos y envía mensajes 3 días antes y el día del vencimiento.',
  },
  {
    q: '¿Cuánto cuesta un software para gimnasios?',
    a: 'Gymple ofrece 14 días de prueba gratis. Luego, si el uso realmente te beneficia en el control de tu gimnasio, el precio es mensual.',
  },
  {
    q: '¿Puedo importar mis datos actuales de Excel?',
    a: 'Sí, ofrecemos importación de datos desde Excel o CSV. Nuestro equipo te ayuda a migrar tu base de clientes, planes y cuotas sin perder información.',
  },
  {
    q: '¿Qué funciones tiene un software de gestión para gimnasios?',
    a: 'Gymple incluye control de clientes, gestión de membresías, registro de asistencia, recordatorios automáticos por WhatsApp, control de gastos e ingresos, estadísticas con filtrado por período, gestión de rutinas y ejercicios digitales.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Tu gimnasio tiene su propio entorno aislado (multi-tenant) con URL personalizada. Usamos encriptación de datos, backups automáticos y servidores seguros. Tus datos nunca se mezclan con otros gimnasios.',
  },
  {
    q: '¿Cómo empiezo a usar Gymple?',
    a: 'Comunicate vía WhatsApp o email, se pedirán datos básicos del gimnasio y de la persona que lo administra para poder configurar el sistema y se podrá empezar a usar el sistema el mismo día.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal>
            <h2 className="text-balance text-3xl font-extrabold md:text-4xl">
              Preguntas frecuentes
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-3 text-muted-foreground">
              Todo lo que necesitás saber sobre Gymple.
            </p>
          </Reveal>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold">{f.q}</span>
                  <span
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-10 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
