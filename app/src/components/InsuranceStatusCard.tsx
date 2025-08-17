"use client"

import type React from "react"

interface PercentageCardProps {
  title: string
  percentage: number
  onDetailPress?: () => void
}

const PercentageCard: React.FC<PercentageCardProps> = ({ title, percentage, onDetailPress }) => {
  return (
    <div className="relative w-[171px] h-[120px] rounded-[15px] overflow-hidden bg-gradient-to-br from-[rgba(217,217,217,0.14)] to-[rgba(115,115,115,0.14)] p-[10px]">
      {/* Title */}
      <div className="absolute left-[10px] top-[17px]">
        <span
          className="text-[#2E2E30] text-[14px] font-bold leading-[20px] tracking-[0.1px] max-w-[85px] block"
          style={{ fontFamily: "Roboto" }}
        >
          {title}
        </span>
      </div>

      {/* Percentage */}
      <div className="absolute left-[15px] top-[60px]">
        <span className="text-black text-[32px] font-bold leading-[40px]" style={{ fontFamily: "Roboto" }}>
          {percentage}%
        </span>
      </div>

      {/* Detail Button */}
      <button
        onClick={onDetailPress}
        className="absolute right-[10px] top-[9px] px-[14px] py-[8px] bg-[#005D85] rounded-[8px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] border border-[#005D85]"
      >
        <span className="text-white text-[14px] font-medium leading-[20px]" style={{ fontFamily: "Inter" }}>
          Detail
        </span>
      </button>

      {/* Circular Progress Background */}
      <div className="absolute right-[15px] top-[52px] w-[48px] h-[48px] rounded-full bg-[#F7F2FF] rotate-[48deg]" />

      {/* Circular Progress Fill */}
      <div
        className="absolute right-[15px] top-[52px] w-[48px] h-[48px] rounded-full bg-[#BB94FF] rotate-[48deg]"
        style={{
          clipPath: `polygon(50% 50%, 50% 0%, ${50 + (percentage / 100) * 50}% 0%, ${50 + (percentage / 100) * 50}% ${50 - (percentage / 100) * 50}%, 50% 50%)`,
        }}
      />
    </div>
  )
}

const PercentageCards: React.FC = () => {
  const handleDetailPress = (cardType: string) => {
    console.log(`[v0] Detail pressed for ${cardType}`)
  }

  return (
    <div className="flex justify-center items-center gap-4 p-8">
      <PercentageCard title="Ditanggung" percentage={80} onDetailPress={() => handleDetailPress("Ditanggung")} />
      <PercentageCard
        title="Tanggung Sendiri"
        percentage={80}
        onDetailPress={() => handleDetailPress("Tanggung Sendiri")}
      />
    </div>
  )
}

export default PercentageCards
