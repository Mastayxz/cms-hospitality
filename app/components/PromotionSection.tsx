export default function GallerySection() {
  return (
    <section
      id="promo"
      className="px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 items-center md:flex-row-reverse flex-row"
    >
      <div className="">
        <img src="/promo.png" alt="Promo Room" className=" shadow-lg w-full " />
      </div>

      <div className="self-start">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-semibold text-left">FEATURED OFFER</h2>
          <img
            src="/shape1.png"
            className="w-[135px] h-[24px]"
            alt="Shape decoration"
          />
        </div>

        {/* Nama Kamar */}
        <h2 className="text-5xl font-bold mb-6 text-black leading-tight">
          Economy Luxe Room
        </h2>

        {/* Deskripsi */}
        <p className="text-lg leading-relaxed text-gray-700 text-justify mb-6">
          Get special offer for Economy Luxe Room, start from Rp 1.250.000,- per
          night. This offer is valid for minimum stay 6 months, and available
          for booking until 31th December 2023. Don't miss this opportunity to
          stay in our comfortable room with a reasonable price.
        </p>

        {/* Harga & Diskon */}
        <div className="flex items-center justify-between gap-8 mt-12">
          {/* Diskon 1 */}
          <div className="text-center flex-1">
            <h1 className="text-6xl font-bold text-[#583101]">
              25%{" "}
              <span className="text-3xl font-medium text-black">Discount</span>
            </h1>
            <span className="text-xl font-medium text-gray-700 block mt-2">
              STAY 6 MONTHS OR MORE
            </span>
          </div>

          {/* Pembatas */}
          <div className="w-px bg-[#583101] h-24"></div>

          {/* Diskon 2 */}
          <div className="text-center flex-1">
            <h1 className="text-6xl font-bold text-[#583101]">
              15%{" "}
              <span className="text-3xl font-medium text-black">Discount</span>
            </h1>
            <span className="text-xl font-medium text-gray-700 block mt-2">
              STAY 3 MONTHS OR MORE
            </span>
          </div>
        </div>
        <div className="mt-20">
          <a
            href="/booking"
            className="inline-block hover:underline bg-[#583101] px-6 py-3 rounded-md text-[#ffedd8] font-medium"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
