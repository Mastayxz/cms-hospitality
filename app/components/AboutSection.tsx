"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12 mt-1 items-center"
    >
      {/* Text Area */}
      <div className="max-w-2xl mx-auto md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-3xl font-semibold"
          >
            About Us
          </motion.h2>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            src="/shape1.png"
            className="w-[135px] h-[24px]"
            alt="Shape decoration"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-5xl font-bold mb-6 text-black leading-tight"
        >
          At Diamond Luxury Hotels
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="text-lg leading-relaxed text-gray-700"
        >
          Welcome to our luxurious hotel, where luxury meets affordability.
          Nestled in the heart of Bali, our hotel offers a unique blend of
          comfort and sophistication. With a carefully curated collection of
          rooms and suites, we provide a haven for those seeking a luxurious
          experience without breaking the bank.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-10"
        >
          <a
            href="/booking"
            className="inline-block hover:underline bg-[#583101] px-6 py-3 rounded-md text-[#ffedd8] font-medium"
          >
            Book Now
          </a>
        </motion.div>
      </div>

      {/* Images Area */}
      <div className="flex justify-center items-center md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative flex flex-col items-center gap-6 left-6"
        >
          {/* Gambar 1 */}
          <Image
            src="/about1.png"
            alt="Hotel Interior"
            width={400}
            height={400}
            className="shadow-lg"
          />
        </motion.div>
        {/* Gambar 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="-left-9 relative flex flex-col items-center gap-6"
        >
          <Image
            src="/about2.png"
            alt="Hotel Lounge"
            width={320}
            height={320}
            className="shadow-xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
