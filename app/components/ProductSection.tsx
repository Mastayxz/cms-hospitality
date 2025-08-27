"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductSection() {
  return (
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
          <Image
            src="/shape1.png"
            width={135}
            height={24}
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
          Diamond Luxury Hotel offers a wide range of rooms and suites, each
          designed to provide the ultimate comfort and relaxation. From our
          luxurious Deluxe Room to our spacious Suite, we have something for
          everyone.
        </p>
      </motion.div>
    </motion.section>
  );
}
