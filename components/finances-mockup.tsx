"use client"

import { LayoutDashboard, Users, CreditCard, Dumbbell, DoorOpen, DollarSign, MessageSquare, TrendingUp, TrendingDown } from "lucide-react"

export default function FinancesMockup() {
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
                i === 5 ? "bg-white/10" : ""
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
        {/* Header */}
        <div className="h-10 md:h-14 bg-white border-b border-[#E0DEDB] flex items-center justify-between px-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="w-24 md:w-32 h-4 bg-[#37322F]/10 rounded" />
            <div className="hidden md:block w-20 h-3 bg-[#E0DEDB] rounded" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-7 bg-white border border-[#E0DEDB] rounded-lg" />
            <div className="w-16 h-7 bg-[#37322F] rounded-lg" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-3 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          <div className="bg-white p-3 md:p-4 rounded-lg border border-[#E0DEDB]">
            <div className="flex items-center justify-between mb-2">
              <div className="w-16 h-3 bg-[#E0DEDB] rounded" />
              <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                <TrendingUp className="w-3 h-3 text-green-600" />
              </div>
            </div>
            <div className="w-16 h-6 bg-green-200 rounded mb-1" />
            <div className="w-14 h-2 bg-green-100 rounded" />
          </div>
          <div className="bg-white p-3 md:p-4 rounded-lg border border-[#E0DEDB]">
            <div className="flex items-center justify-between mb-2">
              <div className="w-16 h-3 bg-[#E0DEDB] rounded" />
              <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
                <TrendingDown className="w-3 h-3 text-red-600" />
              </div>
            </div>
            <div className="w-16 h-6 bg-red-200 rounded mb-1" />
            <div className="w-14 h-2 bg-[#E0DEDB] rounded" />
          </div>
          <div className="bg-white p-3 md:p-4 rounded-lg border border-[#E0DEDB]">
            <div className="flex items-center justify-between mb-2">
              <div className="w-16 h-3 bg-[#E0DEDB] rounded" />
              <div className="w-6 h-6 bg-blue-100 rounded" />
            </div>
            <div className="w-16 h-6 bg-[#37322F]/20 rounded mb-1" />
            <div className="w-14 h-2 bg-[#E0DEDB] rounded" />
          </div>
          <div className="bg-white p-3 md:p-4 rounded-lg border border-[#E0DEDB]">
            <div className="flex items-center justify-between mb-2">
              <div className="w-16 h-3 bg-[#E0DEDB] rounded" />
              <div className="w-6 h-6 bg-purple-100 rounded" />
            </div>
            <div className="w-16 h-6 bg-[#37322F]/20 rounded mb-1" />
            <div className="w-14 h-2 bg-green-100 rounded" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex-1 px-3 md:px-6 pb-3 md:pb-4 grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 overflow-hidden">
          {/* Transactions Table */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-[#E0DEDB] overflow-hidden flex flex-col">
            <div className="px-4 py-3 border-b border-[#E0DEDB] flex items-center justify-between">
              <div className="w-32 h-4 bg-[#37322F]/10 rounded" />
              <div className="w-16 h-3 bg-[#E0DEDB] rounded" />
            </div>
            
            <div className="overflow-auto flex-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-4 py-3 border-b border-[#E0DEDB] last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full ${
                      i % 3 === 0 ? "bg-red-100" : "bg-green-100"
                    }`} />
                    <div>
                      <div className="w-20 md:w-28 h-3 bg-[#E0DEDB] rounded mb-1" />
                      <div className="w-16 md:w-20 h-2 bg-[#E0DEDB]/60 rounded" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`w-14 md:w-16 h-4 rounded ${
                      i % 3 === 0 ? "bg-red-200" : "bg-green-200"
                    }`} />
                    <div className="w-12 h-2 bg-[#E0DEDB] rounded mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg border border-[#E0DEDB] p-4 hidden lg:block">
            <div className="w-28 h-4 bg-[#37322F]/10 rounded mb-4" />
            
            <div className="space-y-4">
              {["green", "blue", "purple"].map((color, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded bg-${color}-200`} />
                      <div className="w-16 h-3 bg-[#E0DEDB] rounded" />
                    </div>
                    <div className="w-14 h-3 bg-[#E0DEDB] rounded" />
                  </div>
                  <div className="w-full h-2 bg-[#F7F5F3] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        i === 0 ? "bg-green-400 w-[35%]" :
                        i === 1 ? "bg-blue-400 w-[50%]" : "bg-purple-400 w-[15%]"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E0DEDB]">
              <div className="flex items-center justify-between">
                <div className="w-20 h-3 bg-[#E0DEDB] rounded" />
                <div className="w-16 h-5 bg-green-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
