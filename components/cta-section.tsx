"use client"

import { Mail, MessageSquare } from "lucide-react"

export default function CTASection() {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center">
      {/* Content */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 relative z-10">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[700px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-8 relative z-20">
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-2xl md:text-4xl font-semibold leading-tight md:leading-[48px] font-sans tracking-tight">
              Contactanos
            </div>
            <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
              Agenda una demo gratuita y descubri como Gymple puede transformar tu gimnasio.
            </div>
          </div>

          <div className="w-full max-w-[500px] flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="mailto:hola@gymple.com" 
              className="w-full sm:w-auto h-11 px-6 relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2A2520] transition-colors gap-2"
            >
              <Mail className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">hola@gymple.com</span>
            </a>
            <a 
              href="https://wa.me/5491112345678" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-11 px-6 relative bg-white border border-[#E0DEDB] shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#F7F5F3] transition-colors gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#37322F]" />
              <span className="text-[#37322F] text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
