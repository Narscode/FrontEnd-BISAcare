const LihatSelengkapnyaButton = () => {
  return (
    <button className="px-[14px] py-[8px] bg-[#005D85] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] rounded-[8px] border border-[#005D85] flex items-center justify-center gap-2">
      <span className="text-white text-[14px] font-inter font-medium leading-[20px]">Lihat Selengkapnya</span>
      <div className="w-5 h-5 relative">
        <svg
          className="w-[10.88px] h-[10.84px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 11 11"
          fill="none"
        >
          <path
            d="M2 5.5h7m0 0L6.5 3m2.5 2.5L6.5 8"
            stroke="#EFF9FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </button>
  )
}

export default LihatSelengkapnyaButton
