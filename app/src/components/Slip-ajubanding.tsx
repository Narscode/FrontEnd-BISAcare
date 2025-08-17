const DocumentCards = () => {
  return (
    <div className="flex justify-center items-center gap-4 p-8">
      {/* Slip Digital Card */}
      <div className="w-[174px] h-[210px] relative bg-white rounded-[15px] border border-[#B2E3FF]">
        <div
          className="absolute left-[19px] top-[7px] w-[134px] text-center text-[#2E2E30] text-sm font-bold leading-5 tracking-[0.25px]"
          style={{ fontFamily: "Roboto" }}
        >
          Slip Digital
        </div>

        <div className="absolute left-[10px] top-[33px] w-[151px] h-[113px] rounded-[15px] border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
          <div className="w-[39px] h-[35px] bg-black/20 rounded-[15px] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
              <path
                d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="absolute left-[13px] top-[158px] w-[149px]">
          <button
            className="w-full px-[14px] py-2 bg-[#005D85] text-white text-sm font-medium leading-5 rounded-lg shadow-sm border border-[#005D85]"
            style={{ fontFamily: "Inter" }}
          >
            Details
          </button>
        </div>
      </div>

      {/* Aju Banding Card */}
      <div className="w-[174px] h-[210px] relative bg-white rounded-[15px] border border-[#B2E3FF]">
        <div
          className="absolute left-[19px] top-[7px] w-[134px] text-center text-[#2E2E30] text-sm font-bold leading-5 tracking-[0.25px]"
          style={{ fontFamily: "Roboto" }}
        >
          Aju Banding
        </div>

        <div className="absolute left-[10px] top-[33px] w-[151px] h-[113px] rounded-[15px] border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
          <div className="w-[39px] h-[35px] bg-black/20 rounded-[15px] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
              <path
                d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="absolute left-[13px] top-[158px] w-[149px]">
          <button
            className="w-full px-[14px] py-2 bg-[#005D85] text-white text-sm font-medium leading-5 rounded-lg shadow-sm border border-[#005D85]"
            style={{ fontFamily: "Inter" }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default DocumentCards
