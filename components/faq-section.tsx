"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Que es Gymple y para quien es?",
    answer:
      "Gymple es un sistema SaaS todo en uno para gimnasios, centros de entrenamiento y clubes deportivos. Te permite gestionar socios, cobrar cuotas, enviar recordatorios por WhatsApp y llevar las finanzas de tu negocio, todo desde la nube.",
  },
  {
    question: "Como funcionan los recordatorios de WhatsApp?",
    answer:
      "Conectas tu WhatsApp escaneando un codigo QR. El sistema detecta automaticamente los vencimientos y envia mensajes 3 dias antes y el dia del vencimiento. Usamos tecnologia anti-ban con envios humanizados y pausas inteligentes.",
  },
  {
    question: "Puedo importar mis datos actuales de Excel?",
    answer:
      "Si, ofrecemos importacion de datos desde Excel o CSV. Nuestro equipo te ayuda a migrar tu base de socios, planes y cuotas sin perder informacion.",
  },
  {
    question: "Mis datos estan seguros?",
    answer:
      "Tu gimnasio tiene su propio entorno aislado (multi-tenant) con URL personalizada. Usamos encriptacion de datos, backups automaticos y servidores seguros. Tus datos nunca se mezclan con otros gimnasios.",
  },
  {
    question: "Que soporte ofrecen?",
    answer:
      "Todos los planes incluyen soporte por email y WhatsApp. El plan Profesional tiene soporte prioritario y el plan Cadenas incluye onboarding dedicado y soporte 24/7.",
  },
  {
    question: "Como empiezo a usar Gymple?",
    answer:
      "Registrate gratis y tenes 14 dias para probar todas las funciones sin cargo y sin tarjeta de credito. Nuestro equipo te ayuda a configurar tu gimnasio y empezar a usar el sistema el mismo dia.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Preguntas Frecuentes
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Todo lo que necesitas saber
            <br className="hidden md:block" />
            sobre Gymple.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
