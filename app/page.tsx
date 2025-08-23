"use client";
import CheckAvailability from "./components/CheckAvailabilty";
import GallerySection from "./components/GalerySection";
import FaqSection from "./components/FaqSection";
import RoomsSection from "./components/RoomsSection";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Diamond Luxury Hotel"
        subtitle="Welcome To The Place Where Luxury Meets Affordability"
        backgroundImage="/hero.png"
      />

      {/* Spacer */}
      <div className="p-6 relative -top-24">
        <CheckAvailability />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Intro product section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        id="rooms"
        className="px-8 md:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center"
      >
        {/* Kolom Kiri */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
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
        </motion.div>
        {/* Kolom Kanan */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
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
        </motion.div>
      </motion.section>

      {/* gallery section */}
      <RoomsSection />

      {/* Intro Gallery Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="px-6 md:px-16 py-16 grid md:grid-cols-2 gap-12 mt-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto md:mx-0 md:px-0"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-semibold text-left">OUR SPACES</h2>
            <img
              src="/shape1.png"
              className="w-[135px] h-[24px]"
              alt="Shape decoration"
            />
          </div>
          <h2 className="text-5xl font-bold mb-4 text-black leading-tight text-left">
            Check Our Hotel Gallery
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl text-left">
            Welcome to our luxurious hotel, where luxury meets affordability.
            Nestled in the heart of Bali, our hotel offers a unique blend of
            comfort and sophistication. With a carefully curated collection of
            rooms and suites, we provide a haven for those seeking a luxurious
            experience without breaking the bank.
          </p>
        </motion.div>
      </motion.section>

      {/* Gallery Section */}
      <GallerySection />

      {/* FAQs */}
      <FaqSection />
    </div>
  );
}
