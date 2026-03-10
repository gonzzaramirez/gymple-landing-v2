"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Users, MessageSquare, CreditCard, Dumbbell, DoorOpen, BarChart3, AlertTriangle, Clock, FileSpreadsheet, MessageCircleWarning, Monitor } from "lucide-react"
import FAQSection from "../components/faq-section"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"
import GymDashboardMockup from "../components/gym-dashboard-mockup"
import WhatsAppMockup from "../components/whatsapp-mockup"
import FinancesMockup from "../components/finances-mockup"

// Badge Component
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

// Feature Card Component
function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`flex-1 p-4 sm:p-5 md:p-6 flex flex-col gap-2 cursor-pointer transition-all duration-300 border-b md:border-b-0 md:border-r border-[#E0DEDB] last:border-b-0 last:border-r-0 ${
        isActive ? "bg-white" : "hover:bg-white/50"
      }`}
    >
      {isActive && (
        <div className="space-y-1 mb-2">
          <div className="w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
            <div
              className="h-0.5 bg-[#37322F] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      <h3 className="text-[#49423D] text-sm font-semibold leading-6">{title}</h3>
      <p className="text-[#605A57] text-sm leading-[22px]">{description}</p>
    </div>
  )
}

// Problem Card Component  
function ProblemCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex-1 p-6 bg-white border border-[#E0DEDB] rounded-lg flex flex-col gap-4">
      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-500">
        {icon}
      </div>
      <div>
        <h3 className="text-[#49423D] text-base font-semibold mb-2">{title}</h3>
        <p className="text-[#605A57] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

// Solution Card Component
function SolutionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex-1 p-6 bg-[#37322F] border border-[#4A4543] rounded-lg flex flex-col gap-4">
      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <h3 className="text-white text-base font-semibold mb-2">{title}</h3>
        <p className="text-[#B2AEA9] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) return

      setProgress((prev) => {
        if (prev >= 100) {
          if (mountedRef.current) {
            setActiveCard((current) => (current + 1) % 3)
          }
          return 0
        }
        return prev + 2
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const handleCardClick = (index: number) => {
    if (!mountedRef.current) return
    setActiveCard(index)
    setProgress(0)
  }

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Vertical Lines */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
            {/* Navigation */}
            <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
              <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

              <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
                <div className="flex justify-center items-center">
                  <div className="flex justify-start items-center gap-2">
                    <div className="w-6 h-6 bg-[#37322F] rounded-lg flex items-center justify-center">
                      <Dumbbell className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-5 font-sans">
                      Gymple
                    </div>
                  </div>
                  <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
                    <div className="flex justify-start items-center">
                      <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                        Funciones
                      </div>
                    </div>
                    <div className="flex justify-start items-center">
                      <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                        Contacto
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
                  <div className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center">
                    <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-medium leading-5 font-sans">
                      Iniciar sesion
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full">
              <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <div className="w-full max-w-[800px] text-center flex justify-center flex-col text-[#37322F] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[72px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-[1.1] font-serif px-2 sm:px-4 md:px-0">
                    Olvida el Excel y las planillas.
                    <br />
                    <span className="text-[#605A57]">Automatiza tu gimnasio.</span>
                  </div>
                  <div className="w-full max-w-[560px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                    Gymple automatiza la cobranza con WhatsApp, gestiona socios, rutinas y finanzas. Todo en la nube, aislado para tu gimnasio.
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <div className="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
                  <div className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors">
                    <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                    <div className="flex flex-col justify-center text-white text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans">
                      Probar gratis 14 dias
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
                <img
                  src="/mask-group-pattern.svg"
                  alt=""
                  className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
                />
              </div>

              {/* Dashboard Mockup */}
              <div className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
                <div className="w-full max-w-[960px] lg:w-[960px] h-[200px] sm:h-[280px] md:h-[450px] lg:h-[600px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-[6px] sm:rounded-[8px] lg:rounded-[9.06px] flex flex-col justify-start items-start">
                  <div className="self-stretch flex-1 flex justify-start items-start">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative w-full h-full overflow-hidden">
                        {/* Mockup 1 - Gestion de Socios */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 0 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <GymDashboardMockup />
                        </div>

                        {/* Mockup 2 - WhatsApp */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 1 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <WhatsAppMockup />
                        </div>

                        {/* Mockup 3 - Finanzas */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 2 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <FinancesMockup />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start">
                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
                  <FeatureCard
                    title="Gestion de socios"
                    description="Fichas completas, estados de cuota y alertas visuales de vencimientos."
                    isActive={activeCard === 0}
                    progress={activeCard === 0 ? progress : 0}
                    onClick={() => handleCardClick(0)}
                  />
                  <FeatureCard
                    title="WhatsApp automatico"
                    description="Recordatorios de pago 3 dias antes y el dia del vencimiento."
                    isActive={activeCard === 1}
                    progress={activeCard === 1 ? progress : 0}
                    onClick={() => handleCardClick(1)}
                  />
                  <FeatureCard
                    title="Finanzas claras"
                    description="Cobros, egresos y caja diaria. Balance real de tu negocio."
                    isActive={activeCard === 2}
                    progress={activeCard === 2 ? progress : 0}
                    onClick={() => handleCardClick(2)}
                  />
                </div>

                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Problems Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[700px] px-4 sm:px-6 py-4 sm:py-5 flex flex-col justify-start items-center gap-3 sm:gap-4">
                    <Badge
                      icon={<AlertTriangle className="w-3 h-3 text-[#37322F]" />}
                      text="Sin Gymple"
                    />
                    <div className="w-full text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight font-sans tracking-tight">
                      Los problemas de gestionar con Excel
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      La administracion manual te hace perder tiempo, dinero y clientes.
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 sm:px-8 md:px-16 py-8 sm:py-12 flex justify-center">
                  <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <ProblemCard
                      icon={<Clock className="w-6 h-6" />}
                      title="Horas perdidas"
                      description="Cargar datos manualmente, buscar quien debe y enviar mensajes uno por uno."
                    />
                    <ProblemCard
                      icon={<FileSpreadsheet className="w-6 h-6" />}
                      title="Errores en planillas"
                      description="Fechas mal cargadas, cuotas que se pierden y datos duplicados."
                    />
                    <ProblemCard
                      icon={<MessageCircleWarning className="w-6 h-6" />}
                      title="Clientes que no pagan"
                      description="Sin recordatorios automaticos, los socios olvidan renovar."
                    />
                    <ProblemCard
                      icon={<BarChart3 className="w-6 h-6" />}
                      title="Cero visibilidad"
                      description="No sabes cuanto facturaste, quien vence hoy o como va tu negocio."
                    />
                  </div>
                </div>
              </div>

              {/* Solutions Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center bg-[#37322F]">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(255,255,255,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[700px] px-4 sm:px-6 py-4 sm:py-5 flex flex-col justify-start items-center gap-3 sm:gap-4">
                    <div className="px-[14px] py-[6px] bg-white/10 overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-white/20">
                      <Dumbbell className="w-3 h-3 text-white" />
                      <div className="text-center flex justify-center flex-col text-white text-xs font-medium leading-3 font-sans">
                        Con Gymple
                      </div>
                    </div>
                    <div className="w-full text-center flex justify-center flex-col text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight font-sans tracking-tight">
                      Todo lo que necesitas en un solo lugar
                    </div>
                    <div className="self-stretch text-center text-[#B2AEA9] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Funciones pensadas para que te enfoques en entrenar, no en administrar.
                    </div>
                  </div>
                </div>

                <div className="self-stretch px-4 sm:px-8 md:px-16 py-8 sm:py-12 flex justify-center">
                  <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <SolutionCard
                      icon={<Users className="w-6 h-6" />}
                      title="Gestion de socios"
                      description="Fichas completas con foto, datos personales, historial de pagos y estados de cuota en tiempo real."
                    />
                    <SolutionCard
                      icon={<MessageSquare className="w-6 h-6" />}
                      title="WhatsApp automatizado"
                      description="Recordatorios de vencimiento enviados automaticamente. Tecnologia anti-ban con envios humanizados."
                    />
                    <SolutionCard
                      icon={<CreditCard className="w-6 h-6" />}
                      title="Finanzas y caja"
                      description="Registra cobros y egresos. Visualiza balance diario, mensual y por metodo de pago."
                    />
                    <SolutionCard
                      icon={<Dumbbell className="w-6 h-6" />}
                      title="Rutinas digitales"
                      description="Los entrenadores crean rutinas y los socios las ven desde su celular. Sin papeles."
                    />
                    <SolutionCard
                      icon={<DoorOpen className="w-6 h-6" />}
                      title="Control de accesos"
                      description="Integra torniquetes y registra entradas. Solo ingresan socios con cuota al dia."
                    />
                    <SolutionCard
                      icon={<BarChart3 className="w-6 h-6" />}
                      title="Reportes claros"
                      description="Dashboards con metricas clave: socios activos, tasa de cobranza, ingresos y mas."
                    />
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="w-full py-12 sm:py-16 md:py-20 border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="w-full max-w-[700px] px-4 sm:px-6 mb-8 sm:mb-12 flex flex-col justify-start items-center gap-3 sm:gap-4">
                  <div className="w-full text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight font-sans tracking-tight">
                    Resultados reales de gimnasios usando Gymple
                  </div>
                </div>

                <div className="w-full max-w-[900px] px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#37322F] font-serif">+85%</div>
                    <div className="text-sm text-[#605A57] mt-2">Tasa de cobranza</div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#37322F] font-serif">10h</div>
                    <div className="text-sm text-[#605A57] mt-2">Ahorradas por semana</div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#37322F] font-serif">-40%</div>
                    <div className="text-sm text-[#605A57] mt-2">Menos morosidad</div>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#37322F] font-serif">24/7</div>
                    <div className="text-sm text-[#605A57] mt-2">Acceso en la nube</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Before FAQ */}
      <CTASection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
