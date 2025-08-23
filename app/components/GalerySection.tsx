"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const categories = [
  { key: "dining", label: "Dining & Restaurant" },
  { key: "parking", label: "Parking Space" },
  { key: "resort", label: "Resort & Pool" },
  { key: "bedrooms", label: "Bedrooms" },
  { key: "event", label: "Event Spaces" },
];

const galleryImages: Record<string, string[]> = {
  dining: ["/dining1.png", "/dining2.png", "/dining3.png"],
  parking: ["/parking1.jpg", "/parking2.jpg", "/parking3.jpg"],
  resort: ["/resort1.jpg", "/resort2.jpg", "/resort3.jpg"],
  bedrooms: ["/product1.png", "/product2.png", "/product3.png"],
  event: ["/event1.jpg", "/event2.jpg", "/event3.jpg"],
};

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("dining");

  return (
    <motion.section
      className="px-4 md:px-16 py-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      {/* Navigation */}
      <div className="flex overflow-x-auto no-scrollbar gap-6 mb-8">
        {categories.map((cat) => (
          <motion.button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className={`relative pb-2 text-base md:text-xl whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat.key
                ? "text-[#583101] font-bold"
                : "text-gray-600"
            }`}
          >
            {cat.label}
            {activeCategory === cat.key && (
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#583101] rounded-full transition-all duration-300"></span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Gallery */}
      {/* Mobile (carousel) */}
      <div className="block md:hidden overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          {galleryImages[activeCategory].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="min-w-[280px] flex-shrink-0 overflow-hidden  shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={src}
                alt={activeCategory}
                className="w-full h-68 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop (grid) */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages[activeCategory].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="overflow-hidden  shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={src}
              alt={activeCategory}
              className="w-full h-[608px] object-cover"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
