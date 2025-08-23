import Image from "next/image";
import CheckAvailability from "./components/CheckAvailabilty";
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[800px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="bg-opacity-50 p-8  text-center">
          <h1 className="text-5xl font-bold text-[#ffedd8] mb-6">
            Diamond Luxury Hotel
          </h1>
          <h1 className="text-5xl font-medium bg-opacity-50 p-4 rounded text-[#ffedd8]">
            Welcome To The Place Where Luxury Meets Affordability
          </h1>
        </div>
      </section>

      {/* Spacer */}
      <div className="p-4 relative -top-24">
        <CheckAvailability />
      </div>

      {/* About Section */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12 mt-1 items-center">
        {/* Text Area */}
        <div className="max-w-2xl mx-auto md:px-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-semibold">About Us</h2>
            <img
              src="/shape1.png"
              className="w-[135px] h-[24px]"
              alt="Shape decoration"
            />
          </div>

          <h2 className="text-5xl font-bold mb-6 text-black leading-tight">
            At Diamond Luxury Hotels
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to our luxurious hotel, where luxury meets affordability.
            Nestled in the heart of Bali, our hotel offers a unique blend of
            comfort and sophistication. With a carefully curated collection of
            rooms and suites, we provide a haven for those seeking a luxurious
            experience without breaking the bank.
          </p>

          <div className="mt-10">
            <a
              href="/booking"
              className="inline-block hover:underline bg-[#583101] px-6 py-3 rounded-md text-[#ffedd8] font-medium"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Images Area */}
        <div className="flex justify-center items-center md:px-8">
          <div className="relative flex flex-col items-center gap-6 left-6">
            {/* Gambar 1 */}
            <Image
              src="/about1.png"
              alt="Hotel Interior"
              width={400}
              height={400}
              className="shadow-lg "
            />
          </div>
          {/* Gambar 2 */}
          <div className="-left-9 relative flex flex-col items-center gap-6">
            <Image
              src="/about2.png"
              alt="Hotel Lounge"
              width={320}
              height={320}
              className="shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* product section */}
      <section className="px-8 md:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
        {/* Kolom Kiri */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-semibold">OUR CHOICE</h2>
            <img
              src="/shape1.png"
              className="w-[135px] h-[24px]"
              alt="Shape decoration"
            />
          </div>

          <h2 className="text-5xl font-bold mb-6 text-black leading-tight">
            The best room just for you!
          </h2>
        </div>

        {/* Kolom Kanan */}
        <div>
          <p className="text-lg leading-relaxed text-gray-700 text-justify">
            Diamond Luxury Hotel offers a wide range of rooms and suites to suit
            every taste and preference. From our Deluxe Room to our luxurious
            Suite, every room is designed to provide a comfortable and relaxing
            experience. Our rooms are equipped with modern amenities such as
            flat-screen TVs, air conditioning, and free Wi-Fi. We also offer a
            range of amenities such as a fitness center, spa, and restaurant.
            Whether you're looking for a romantic getaway or a family vacation,
            Diamond Luxury Hotel has a room that's perfect for you.
          </p>
        </div>
      </section>
      {/* gallery section */}
      <section className="px-8 md:px-16 py-12 grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {/* gambar pertama panjang ke bawah */}
        <div className="relative">
          <Image
            src="/product1.png"
            alt="product 1"
            width={600}
            height={400}
            className="w-full object-cover"
          />
          <span className="absolute top-0  bg-[#ffff] bg-opacity-60 text-[#583101] px-3 py-3  text-medium">
            Rp 750.000 / night
          </span>
          <span className="absolute bottom-2  text-white px-3 py-3  text-medium">
            Couple Simple Room
          </span>
        </div>

        {/* gambar kedua lebar ke samping */}
        <div className="relative col-span-2 bg-white shadow-lg overflow-hidden">
          <Image
            src="/product2.png"
            alt="product 2"
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-0  bg-[#ffff] bg-opacity-60 text-[#583101] px-3 py-3  text-medium">
            Rp 1.200.000 / night
          </span>
          <span className="absolute bottom-2  text-white px-3 py-3  text-medium">
            Luxe Room
          </span>
        </div>

        {/* sisa gambar normal */}
        <div className="relative bg-white shadow-lg overflow-hidden">
          <Image
            src="/product3.png"
            alt="product 3"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-0  bg-[#ffff] bg-opacity-60 text-[#583101] px-3 py-3  text-medium">
            Rp 950.000 / night
          </span>
          <span className="absolute bottom-2  text-white px-3 py-3  text-medium">
            Premium Room
          </span>
        </div>

        <div className="relative bg-white shadow-lg overflow-hidden">
          <Image
            src="/product4.png"
            alt="product 4"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-0  bg-[#ffff] bg-opacity-60 text-[#583101] px-3 py-3  text-medium">
            Rp 1.500.000 / night
          </span>
          <span className="absolute bottom-2  text-white px-3 py-3  text-medium">
            Master Room
          </span>
        </div>

        <div className="relative bg-white shadow-lg overflow-hidden">
          <Image
            src="/product5.png"
            alt="product 5"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-0  bg-[#ffff] bg-opacity-60 text-[#583101] px-3 py-3  text-medium">
            Rp 2.000.000 / night
          </span>
          <span className="absolute bottom-2  text-white px-3 py-3  text-medium">
            Family Luxe
          </span>
        </div>
      </section>

      {/* Promo Section */}
      <section className="px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center shadow-md">
        {/* Kolom Kiri */}
        <div className="">
          <img
            src="/promo.png"
            alt="Promo Room"
            className=" shadow-lg w-full "
          />
        </div>

        {/* Kolom Kanan */}
        <div className="self-start">
          {/* Heading */}
          <div className="flex gap-3 mb-6 items-center">
            <h2 className="text-3xl font-semibold">FEATURED OFFER</h2>
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
            Get special offer for Economy Luxe Room, start from Rp 1.250.000,-
            per night. This offer is valid for minimum stay 6 months, and
            available for booking until 31th December 2023. Don't miss this
            opportunity to stay in our comfortable room with a reasonable price.
          </p>

          {/* Harga & Diskon */}
          {/* Harga & Diskon */}
          <div className="flex items-center justify-between gap-8 mt-12">
            {/* Diskon 1 */}
            <div className="text-center flex-1">
              <h1 className="text-6xl font-bold text-[#583101]">
                25%{" "}
                <span className="text-3xl font-medium text-black">
                  Discount
                </span>
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
                <span className="text-3xl font-medium text-black">
                  Discount
                </span>
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
    </div>
  );
}
