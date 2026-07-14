'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Reveal } from '@/components/ui/reveal'

const clients = [
  { name: 'Kodiak Gym', ig: 'kodiakgym', img: 'kodiak.jpg' },
  { name: 'Hardcore Posadas', ig: 'hardcoreposadas', img: 'hardcoreposadas.jpg' },
  { name: 'Dattoli Coach', ig: 'dattolicoach', img: 'dattolicoach.jpg' },
  { name: 'Huracán Gym', ig: 'huracangym_ctes', img: 'huracangym.jpg' },
  { name: 'Punto Fit', ig: 'puntofit.ctes', img: 'puntofit.jpg' },
  { name: 'Force Factory', ig: 'forcefactory.gym', img: 'forcefactory.jpg' },
  { name: 'Capacita Entrenamiento', ig: 'capacita.entrenamiento', img: 'capacita.jpg' },
  { name: 'Health & Fitness', ig: 'healtfitness19', img: 'health&fitness.jpg' },
  { name: 'Athletic Gym', ig: 'athleticgymok', img: 'athletic.jpg' },
  { name: 'New Athletic', ig: 'new_athletic2', img: 'athletic2.jpg' },
  { name: 'Studio Pilates Cristina', ig: 'studiopilates_cristina', img: 'studiopilates_cristina.jpg' },
  { name: 'Donaire Pilates', ig: 'donairepilates.elitestudio', img: 'donaire.jpg' },
  { name: 'Donaire Estética', ig: 'donaire_esteticaprofesional', img: 'donaire_estetica.jpg' },
  { name: 'City Fitness', ig: 'cityfitness.ctes', img: 'cityfitness.jpg' },
  { name: 'Fox Gym', ig: 'foxgym.ctes', img: 'foxgymctes.jpg' },
]

function igUrl(handle: string) {
  return `https://www.instagram.com/${handle}/`
}

export function ClientsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const track = trackRef.current
      if (!track) return

      const tween = gsap.to(track, {
        xPercent: -50,
        ease: 'none',
        duration: 28,
        repeat: -1,
      })

      const onEnter = () => gsap.to(tween, { timeScale: 0, duration: 0.5 })
      const onLeave = () => gsap.to(tween, { timeScale: 1, duration: 0.5 })
      track.addEventListener('mouseenter', onEnter)
      track.addEventListener('mouseleave', onLeave)

      return () => {
        track.removeEventListener('mouseenter', onEnter)
        track.removeEventListener('mouseleave', onLeave)
      }
    },
    { scope: trackRef },
  )

  const loop = [...clients, ...clients]

  return (
    <section className="overflow-hidden py-10 md:py-16">
      <Reveal className="mx-auto max-w-2xl px-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          Confían en Gymple
        </span>
        <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight md:text-4xl">
          Más de 15 centros de entrenamiento mejoran su gestión día a día
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Gimnasios, estudios de pilates y centros funcionales que usan Gymple para ordenar su gestión.
        </p>
      </Reveal>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-32" />

        <div ref={trackRef} className="flex w-max gap-4 px-2">
          {loop.map((c, i) => (
            <a
              key={`${c.name}-${i}`}
              href={igUrl(c.ig)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-64 shrink-0 items-center gap-4 rounded-2xl bg-card p-2 pr-5 ring-1 ring-border transition-shadow hover:shadow-lg hover:shadow-black/5"
            >
              <img
                src={`/gyms/${c.img}`}
                alt={c.name}
                className="size-14 shrink-0 rounded-xl object-cover"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="truncate font-heading font-bold leading-tight text-foreground">
                  {c.name}
                </p>
                <p className="truncate text-sm text-muted-foreground">@{c.ig}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
