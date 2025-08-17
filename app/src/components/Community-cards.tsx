import LihatSelengkapnyaButton from "./lihat-selengkapnya-button"

const CommunityServices = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-black mb-6 font-roboto">Layanan Komunitas!</h2>

      <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
        {[1, 2, 3].map((index) => (
          <div key={index} className="flex-shrink-0 relative">
            <img
              src="/Asset/allianz.jpg"
              alt={`Allianz Indonesia ${index}`}
              className="w-[139px] h-[163px] rounded-[15px] shadow-[0px_1px_2px_rgba(0,0,0,0.30)]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[34px] bg-[rgba(235.52,240.51,255,0.87)] rounded-b-[15px] flex items-center justify-center">
              <span
                className="text-black text-[14px] font-roboto font-medium leading-[20px] tracking-[0.10px]"
                style={{ fontFamily: "Roboto" }}
              >
                Allianz Indonesia
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <LihatSelengkapnyaButton />
      </div>
    </div>
  )
}

export default CommunityServices
