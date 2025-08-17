import type React from "react"

const BISAbotButton: React.FC = () => {
  return (
    <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-[15px] border border-[#5785FF] hover:bg-blue-50 transition-colors">
      {/* Chat Icon */}
      <div className="w-6 h-6 relative overflow-hidden">
        <img
          src="/Asset/chat.svg"
          alt="Chat icon"
          className="w-[18px] h-4 absolute left-[3px] top-1"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(42%) sepia(96%) saturate(1729%) hue-rotate(217deg) brightness(98%) contrast(101%)",
          }}
        />
      </div>

      {/* BISAbot Text */}
      <span
        className="text-[#5785FF] text-sm font-semibold leading-4 tracking-[0.42px]"
        style={{ fontFamily: "Inter" }}
      >
        BISAbot
      </span>
    </button>
  )
}

export default BISAbotButton
