'use client'

import { useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { PillButton } from '@/components/ui/pill-button'
import { BrowserFrame } from '@/components/ui/browser-frame'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const ease = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // scroll parallax
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  })

  return (
    <section id="top" className="px-4 pt-24 md:pt-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground md:px-14 md:py-16">
        {/* glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-[oklch(0.55_0.12_150/0.4)] blur-3xl" />
        <div className="bg-grain pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] md:text-6xl"
            >
              Gymple. El software que automatiza tu gimnasio.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              className="mt-5 max-w-md text-pretty text-base leading-relaxed text-primary-foreground/70 md:text-lg"
            >
              Sistema de gestión para centros de entrenamiento, control de clientes, membresías y finanzas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <PillButton href="https://wa.me/543775439981?text=Hola%20quiero%20mas%20informacion%20sobre%20gymple!" target="_blank" variant="accent">
                Probar gratis 14 días
              </PillButton>
              <a
                href="#caracteristicas"
                className="text-sm font-semibold text-primary-foreground/80 underline-offset-4 hover:underline"
              >
                Ver características
              </a>
            </motion.div>


          </div>

          {/* hero visual — demo real en marco premium */}
          <motion.div
            ref={parallaxRef}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative"
          >
            <BrowserFrame
              src="/demo-dashboard-hero.png"
              alt="Panel de Gymple con socios, cuotas y flujo de caja del demo real"
              url="demo.gymple.online/dashboard"
              eager
              imgClassName="aspect-[16/10]"
            />
            <motion.a
              href="https://demo.gymple.online/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.6 }}
              className="absolute -bottom-4 left-4 rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Ver demo en vivo
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.7 }}
              className="absolute -top-4 right-4 rounded-2xl bg-primary-foreground/95 px-4 py-2 text-primary shadow-xl backdrop-blur"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide opacity-70">Neto mes</p>
              <p className="text-lg font-extrabold tabular-nums">$80k</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.8 }}
              className="absolute -left-3 top-1/2 hidden -translate-y-1/2 rounded-2xl bg-primary-foreground/95 px-4 py-2 text-primary shadow-xl backdrop-blur sm:block"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide opacity-70">Cuotas al día</p>
              <p className="text-lg font-extrabold tabular-nums">+6 ✓</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
