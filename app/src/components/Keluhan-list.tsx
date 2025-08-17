"use client"

import { useState } from "react"

const WorkBagIcon = () => (
  <img src="/Asset/work-bag.svg" alt="Work bag" width="13" height="12" className="object-contain" />
)

export default function MedicalClaimsTracker() {
  const [activeTab, setActiveTab] = useState("Diajukan")

  const tabs = ["Diajukan", "Diproses", "Ditanggung", "Ditolak"]

  const claimsData = Array(5).fill({
    title: "Heart Failure Indication",
    description: "Heart rate detected at 42 Bpm",
  })

  return (
    <div className="w-full max-w-md mx-auto bg-white p-4">
      {/* Title */}
      <h1 className="text-xl font-bold text-black mb-4 font-roboto">Keluhan atau Gejala Terakhir</h1>

      {/* Tab Navigation */}
      <div className="relative mb-3">
        {/* Background */}
        <div className="w-full h-[34px] bg-[#D4DFFF] rounded-[15px]"></div>

        {/* Tab Container */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-[12px] text-xs font-roboto font-bold leading-4 tracking-[0.5px] transition-colors ${
                activeTab === tab ? "bg-white text-[#00164F]" : "text-[#36343B]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Claims List */}
      <div className="space-y-0">
        {claimsData.map((claim, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-4 border-b border-[rgba(116,119,117,0.5)] last:border-b-0"
          >
            {/* Icon Container */}
            <div className="w-[25px] h-[25px] bg-[rgba(197,220,250,0.5)] rounded-full flex items-center justify-center">
              <WorkBagIcon />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="text-black text-sm font-roboto font-bold leading-5 tracking-[0.1px]">{claim.title}</div>
              <div className="text-[#444444] text-[11px] font-roboto font-bold leading-4 tracking-[0.5px]">
                {claim.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
