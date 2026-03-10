"use client"

import { LayoutDashboard, Users, CreditCard, Dumbbell, DoorOpen, DollarSign, MessageSquare, Send } from "lucide-react"

export default function WhatsAppMockup() {
  return (
    <div className="w-full h-full bg-[#F7F5F3] flex">
      {/* Sidebar Silhouette */}
      <div className="w-12 md:w-48 bg-[#37322F] flex flex-col p-2 md:p-4">
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-lg" />
          <div className="hidden md:block w-16 h-4 bg-white/20 rounded" />
        </div>
        
        <nav className="space-y-2">
          {[LayoutDashboard, Users, CreditCard, Dumbbell, DoorOpen, DollarSign, MessageSquare].map((Icon, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-2 py-2 rounded-lg ${
                i === 6 ? "bg-white/10" : ""
              }`}
            >
              <Icon className="w-4 h-4 text-white/40" />
              <div className="hidden md:block w-16 h-3 bg-white/10 rounded" />
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Chat Panel */}
        <div className="flex-1 flex flex-col bg-white">
          {/* WhatsApp Header */}
          <div className="h-10 md:h-14 bg-[#25D366] flex items-center justify-between px-3 md:px-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-9 md:h-9 bg-white/20 rounded-full" />
              <div>
                <div className="w-20 md:w-28 h-3 bg-white/30 rounded mb-1" />
                <div className="w-16 md:w-20 h-2 bg-white/20 rounded" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <div className="w-14 h-2 bg-white/20 rounded" />
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 bg-[#ECE5DD] p-3 md:p-4 overflow-auto space-y-2 md:space-y-3">
            {/* Sent message */}
            <div className="flex justify-end">
              <div className="max-w-[75%] px-3 py-2 bg-[#DCF8C6] rounded-lg">
                <div className="w-full space-y-1">
                  <div className="w-36 md:w-48 h-2 bg-[#37322F]/20 rounded" />
                  <div className="w-32 md:w-44 h-2 bg-[#37322F]/20 rounded" />
                  <div className="w-24 md:w-32 h-2 bg-[#37322F]/20 rounded" />
                </div>
                <div className="flex items-center justify-end gap-1 mt-2">
                  <div className="w-6 h-2 bg-[#37322F]/10 rounded" />
                </div>
              </div>
            </div>

            {/* Sent message 2 */}
            <div className="flex justify-end">
              <div className="max-w-[75%] px-3 py-2 bg-[#DCF8C6] rounded-lg">
                <div className="w-full space-y-1">
                  <div className="w-28 md:w-36 h-2 bg-[#37322F]/20 rounded" />
                  <div className="w-32 md:w-40 h-2 bg-[#37322F]/20 rounded" />
                </div>
              </div>
            </div>

            {/* Received message */}
            <div className="flex justify-start">
              <div className="max-w-[75%] px-3 py-2 bg-white rounded-lg">
                <div className="w-full space-y-1">
                  <div className="w-28 md:w-36 h-2 bg-[#37322F]/15 rounded" />
                  <div className="w-20 md:w-24 h-2 bg-[#37322F]/15 rounded" />
                </div>
              </div>
            </div>

            {/* Sent message 3 */}
            <div className="flex justify-end">
              <div className="max-w-[75%] px-3 py-2 bg-[#DCF8C6] rounded-lg">
                <div className="w-full space-y-1">
                  <div className="w-32 md:w-40 h-2 bg-[#37322F]/20 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="h-12 md:h-14 bg-[#F0F2F5] flex items-center px-3 md:px-4 gap-2 md:gap-3">
            <div className="flex-1 bg-white rounded-full px-4 py-2">
              <div className="w-24 md:w-32 h-3 bg-[#E0DEDB] rounded" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#25D366] rounded-full flex items-center justify-center">
              <Send className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Right Panel - Queue */}
        <div className="w-48 md:w-64 bg-white border-l border-[#E0DEDB] hidden lg:flex flex-col">
          <div className="h-14 border-b border-[#E0DEDB] flex items-center px-4">
            <div className="w-28 h-4 bg-[#37322F]/10 rounded" />
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between mb-4">
              <div className="w-20 h-3 bg-[#E0DEDB] rounded" />
              <div className="w-16 h-5 bg-green-100 rounded-full" />
            </div>

            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 bg-[#F7F5F3] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-20 h-3 bg-[#E0DEDB] rounded" />
                  <div className="w-8 h-3 bg-[#E0DEDB] rounded" />
                </div>
                <div className="w-24 h-2 bg-green-200 rounded" />
              </div>
            ))}

            <div className="pt-4 border-t border-[#E0DEDB] mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-16 h-3 bg-[#E0DEDB] rounded" />
                <div className="w-6 h-4 bg-green-200 rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div className="w-20 h-3 bg-[#E0DEDB] rounded" />
                <div className="w-6 h-4 bg-[#E0DEDB] rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
