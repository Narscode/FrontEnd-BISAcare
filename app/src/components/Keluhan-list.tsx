"use client"

import { useState } from "react"

const WorkBagIcon = () => (
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="work-bag.svg">
    <path
      d="M10.5 3H9V2.5C9 1.67 8.33 1 7.5 1H5.5C4.67 1 4 1.67 4 2.5V3H2.5C1.67 3 1 3.67 1 4.5V9.5C1 10.33 1.67 11 2.5 11H10.5C11.33 11 12 10.33 12 9.5V4.5C12 3.67 11.33 3 10.5 3ZM5 2.5C5 2.22 5.22 2 5.5 2H7.5C7.78 2 8 2.22 8 2.5V3H5V2.5ZM11 9.5C11 9.78 10.78 10 10.5 10H2.5C2.22 10 2 9.78 2 9.5V4.5C2 4.22 2.22 4 2.5 4H10.5C10.78 4 11 4.22 11 4.5V9.5Z"
      fill="#414141"
    />
  </svg>
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
