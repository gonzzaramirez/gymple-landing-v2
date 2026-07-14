import { Clock, FileWarning, UserMinus, EyeOff } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const problems = [
  {
    icon: Clock,
    title: 'Persiguiendo cuotas en vez de atender',
    desc: 'Pasás más tiempo mandando mensajes de cobro que dando clase. Y los que no pagan, directamente se olvidan.',
  },
  {
    icon: FileWarning,
    title: 'Transferencias que no sabés de quién son',
    desc: 'Llega un depósito y no sabés quién fue. Tenés que revisar el banco, preguntar, hacer malabares. Un desorden.',
  },
  {
    icon: UserMinus,
    title: 'Clientes que desaparecen sin aviso',
    desc: 'Dejan de venir y no sabés por qué. Cuando querés reaccionar, ya los perdiste para siempre.',
  },
  {
    icon: EyeOff,
    title: 'No sabés si el mes cierra bien',
    desc: 'Ingresos, gastos, cuotas pendientes, todo mezclado. Decidís por corazonada, no por números.',
  },
]

export function Problems() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            El problema
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-4 text-balance text-3xl font-extrabold md:text-4xl">
            Los problemas de gestionar sin un sistema
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-3 text-pretty text-muted-foreground">
            Si la administración te come el día, estos te van a sonar.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i}>
            <article className="h-full rounded-2xl bg-card p-6 ring-1 ring-border transition-shadow hover:shadow-lg hover:shadow-black/5">
              <span className="flex size-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <p.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
