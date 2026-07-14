'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Reveal } from '@/components/ui/reveal'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type Stat = {
  prefix?: string
  to: number | null
  suffix?: string
  display?: string
  label: string
}

const stats: Stat[] = [
  { prefix: '+', to: 15, suffix: '', label: 'Centros activos' },
  { to: 14, suffix: ' días', label: 'Prueba gratis, sin tarjeta' },
  { to: null, display: '100%', label: 'En la nube, siempre disponible' },
  { to: null, display: '24/7', label: 'Soporte por WhatsApp' },
]

export function Stats() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const nums = gsap.utils.toArray<HTMLElement>('[data-count]')
      nums.forEach((el) => {
        const target = Number(el.dataset.count)
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString()
          },
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="resultados" className="px-4 py-10 md:py-16">
      <div
        ref={root}
        className="mx-auto max-w-6xl rounded-[2rem] bg-primary px-6 py-14 text-primary-foreground md:px-14"
      >
        <Reveal>
          <h2 className="max-w-xl text-balance text-3xl font-extrabold md:text-4xl">
            Por qué confiar en Gymple
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <div>
                <p className="font-heading text-4xl font-extrabold text-accent md:text-5xl">
                  {s.to === null ? (
                    s.display
                  ) : (
                    <>
                      {s.prefix}
                      <span data-count={s.to}>0</span>
                      {s.suffix}
                    </>
                  )}
                </p>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
