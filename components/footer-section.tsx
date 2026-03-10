import { Dumbbell } from "lucide-react"

export default function FooterSection() {
  return (
    <div className="w-full py-6 border-t border-[rgba(55,50,47,0.12)] flex justify-center items-center">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#37322F] rounded flex items-center justify-center">
            <Dumbbell className="w-3 h-3 text-white" />
          </div>
          <span className="text-[#49423D] text-sm font-medium">Gymple</span>
        </div>
        <span className="text-[#605A57] text-sm">
          {new Date().getFullYear()} Gymple. Todos los derechos reservados.
        </span>
      </div>
    </div>
  )
}
