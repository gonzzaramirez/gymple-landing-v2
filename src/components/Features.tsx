import { Reveal } from '@/components/ui/reveal'
import { PillButton } from '@/components/ui/pill-button'

const features = [
  {
    n: '01',
    title: 'Acceso por roles: admin ve todo, entrenador lo justo',
    desc: 'El dueño ve finanzas, clientes y reportes. Los entrenadores ven solo asistencias y rutinas. Cada quien lo que necesita.',
  },
  {
    n: '02',
    title: 'Sabés quién se quiere ir antes de que se vaya',
    desc: 'El sistema analiza la asistencia y te avisa qué clientes están por abandonar. Recuperás gente que creías perdida.',
  },
  {
    n: '03',
    title: 'Rutinas digitales, sin papel',
    desc: 'Los entrenadores crean rutinas desde el sistema. Los clientes las ven en el celu al instante. Chau planillas y papeles.',
  },
]

export function Features() {
  return (
    <section id="caracteristicas" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <Reveal>
            <h2 className="max-w-2xl text-balance text-3xl font-extrabold leading-tight md:text-5xl">
              Las bases de Gymple
            </h2>
        </Reveal>
        <Reveal delay={1}>
          <PillButton href="#contacto" variant="light">
            Ver todo
          </PillButton>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.n} delay={i}>
            <article className="group flex h-full flex-col rounded-3xl bg-primary p-7 text-primary-foreground transition-transform duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                {f.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
