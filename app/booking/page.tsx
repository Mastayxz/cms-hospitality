import HeroSection from "../components/HeroSection";
import BookingForm from "../components/BookingForm";
import Image from "next/image";
export default function BookingPage() {
  return (
    <>
      <HeroSection
        title="Book Your Stay"
        subtitle="Choose your dates and enjoy the best luxury experience"
        backgroundImage="/product2.png"
      />
      <section className="px-4 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/product1.png"
            alt="product 1"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
          <span className="absolute top-0 bg-white bg-opacity-70 text-[#583101] px-3 py-2 text-sm md:text-base">
            Rp 750.000 / night
          </span>
          <span className="absolute bottom-2 text-white px-3 py-2 text-sm md:text-base">
            Couple Simple Room
          </span>
        </div>
        <BookingForm />
        {/* sisa gambar normal */}
        <div className="relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/product3.png"
            alt="product 3"
            width={400}
            height={400}
            className="w-full h-full object-cover "
          />
          <span className="absolute top-0 bg-white bg-opacity-70 text-[#583101] px-3 py-2 text-sm md:text-base">
            Rp 950.000 / night
          </span>
          <span className="absolute bottom-2 text-white px-3 py-2 text-sm md:text-base">
            Premium Room
          </span>
        </div>

        <div className="relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/product4.png"
            alt="product 4"
            width={400}
            height={400}
            className="w-full h-full object-cover "
          />
          <span className="absolute top-0 bg-white bg-opacity-70 text-[#583101] px-3 py-2 text-sm md:text-base">
            Rp 1.500.000 / night
          </span>
          <span className="absolute bottom-2 text-white px-3 py-2 text-sm md:text-base">
            Master Room
          </span>
        </div>
        <div className="relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/product5.png"
            alt="product 5"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-0 bg-white bg-opacity-70 text-[#583101] px-3 py-2 text-sm md:text-base">
            Rp 2.000.000 / night
          </span>
          <span className="absolute bottom-2 text-white px-3 py-2 text-sm md:text-base">
            Family Luxe
          </span>
        </div>
      </section>
    </>
  );
}
