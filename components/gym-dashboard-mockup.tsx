"use client"

import { Users, LayoutDashboard, CreditCard, Dumbbell, DoorOpen, DollarSign, MessageSquare } from "lucide-react"

export default function GymDashboardMockup() {
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
                i === 1 ? "bg-white/10" : ""
              }`}
            >
              <Icon className="w-4 h-4 text-white/40" />
              <div className="hidden md:block w-16 h-3 bg-white/10 rounded" />
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Silhouette */}
        <div className="h-10 md:h-14 bg-white border-b border-[#E0DEDB] flex items-center justify-between px-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="w-24 md:w-32 h-4 bg-[#37322F]/10 rounded" />
            <div className="hidden md:block w-32 h-8 bg-[#F7F5F3] rounded-lg" />
          </div>
          <div className="w-20 md:w-24 h-7 bg-[#37322F] rounded-lg" />
        </div>

        {/* Stats Cards Silhouette */}
        <div className="p-3 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-3 md:p-4 rounded-lg border border-[#E0DEDB]">
              <div className="w-16 h-3 bg-[#E0DEDB] rounded mb-2" />
              <div className="w-12 h-6 bg-[#37322F]/20 rounded mb-1" />
              <div className="w-14 h-2 bg-[#E0DEDB] rounded" />
            </div>
          ))}
        </div>

        {/* Table Silhouette */}
        <div className="flex-1 px-3 md:px-6 pb-3 md:pb-4 overflow-hidden">
          <div className="bg-white rounded-lg border border-[#E0DEDB] h-full overflow-hidden">
            {/* Table Header */}
            <div className="flex gap-2 md:gap-4 px-3 md:px-4 py-3 bg-[#F7F5F3] border-b border-[#E0DEDB]">
              <div className="flex-1 h-3 bg-[#E0DEDB] rounded" />
              <div className="w-16 h-3 bg-[#E0DEDB] rounded hidden md:block" />
              <div className="w-12 h-3 bg-[#E0DEDB] rounded" />
              <div className="w-14 h-3 bg-[#E0DEDB] rounded" />
              <div className="w-12 h-3 bg-[#E0DEDB] rounded" />
            </div>
            
            {/* Table Rows */}
            <div className="overflow-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="flex gap-2 md:gap-4 px-3 md:px-4 py-3 border-b border-[#E0DEDB] last:border-b-0 items-center"
                >
                  <div className="flex-1 flex items-center gap-2">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#37322F]/10 rounded-full" />
                    <div className="w-20 md:w-28 h-3 bg-[#E0DEDB] rounded" />
                  </div>
                  <div className="w-16 h-3 bg-[#E0DEDB] rounded hidden md:block" />
                  <div className="w-12 h-3 bg-[#E0DEDB] rounded" />
                  <div className={`w-14 h-5 rounded-full ${
                    i % 3 === 0 ? "bg-red-100" : i % 3 === 1 ? "bg-amber-100" : "bg-green-100"
                  }`} />
                  <div className="w-12 h-3 bg-[#E0DEDB] rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
