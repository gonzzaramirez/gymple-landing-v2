'use client'

import { useRef } from 'react'
import { motion } from 'motion/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { PillButton } from '@/components/ui/pill-button'

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

          {/* hero image — hidden on mobile */}
          <motion.div
            ref={parallaxRef}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/20 to-accent/5 blur-2xl" />
            <img
              src="/hero.png"
              alt="Gymple"
              className="relative h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
