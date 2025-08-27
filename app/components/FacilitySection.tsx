"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FacilitySection() {
  return (
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
          <Image
            src="/shape1.png"
            className="w-[135px] h-[24px]"
            alt="Shape decoration"
            width={135}
            height={24}
          />
        </div>
        <h2 className="text-5xl font-bold mb-4 text-black leading-tight text-left">
          Check Our Hotel Facility
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
  );
}
