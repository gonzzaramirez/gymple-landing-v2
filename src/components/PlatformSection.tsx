import { Smartphone, Bell, UserX, BarChart3, CalendarCheck, ClipboardList } from 'lucide-react'
import { FeatureSplit } from './FeatureSplit'

export function PlatformSection() {
  return (
    <div id="plataforma">
      <FeatureSplit
        eyebrow="Control total"
        title="Tu negocio en una sola pantalla"
        description="Planes flexibles, precios congelados, convenios corporativos, rutinas digitales. Todo lo que pasa en tu gimnasio, ordenado y a un clic."
        image="/hero1.webp"
        bullets={[
          { icon: CalendarCheck, text: 'Planes a medida: mensuales, trimestrales, personalizados' },
          { icon: BarChart3, text: 'Precios congelados: lo que pactás se respeta siempre, aunque después subas' },
          { icon: ClipboardList, text: 'Rutinas digitales: las crean los entrenadores, los clientes las ven desde el celu' },
        ]}
      />

      <FeatureSplit
        reverse
        eyebrow="Acceso por perfiles"
        title="Cada persona en su lugar"
        description="Dueños, administradores, entrenadores y clientes. Cada uno accede a lo que necesita y nada más. Sin riesgo de que alguien vea lo que no debe."
        image="/hero2.webp"
        bullets={[
          { icon: Bell, text: 'Administradores: ven finanzas, clientes, reportes y configuración' },
          { icon: UserX, text: 'Entrenadores: solo asistencias, rutinas y sus alumnos' },
          { icon: Smartphone, text: 'Clientes: acceden a sus rutinas y progreso desde el celu' },
        ]}
      />
    </div>
  )
}
