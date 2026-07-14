import type { LucideIcon } from 'lucide-react'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { PillButton } from '@/components/ui/pill-button'
import { cn } from '@/lib/utils'

export type FeatureSplitProps = {
  eyebrow: string
  title: string
  description: string
  bullets: { icon: LucideIcon; text: string }[]
  reverse?: boolean
  image?: string
}

export function FeatureSplit({
  eyebrow,
  title,
  description,
  bullets,
  reverse = false,
  image = "/hero2.png",
}: FeatureSplitProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className={cn(reverse && 'lg:order-2')}>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/30 text-primary">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-foreground/80">
                  {b.text}
                </span>
              </li>
            ))}
          </ul>

          <PillButton href="#contacto" className="mt-8">
            Agendar demo
          </PillButton>
        </Reveal>

        <div className={cn(reverse && 'lg:order-1')}>
          <img
            src={image}
            alt="Gymple - plataforma de gestión"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
