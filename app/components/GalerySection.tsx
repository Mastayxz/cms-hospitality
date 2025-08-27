"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface FacilityImage {
  id: number;
  url: string;
}

interface Facility {
  id: number;
  name: string;
  description: string;
  images: FacilityImage[];
}

export default function GallerySection() {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [activeFacility, setActiveFacility] = useState<number | null>(null);

  // fetch facilities
  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const res = await fetch("/api/facility");
        if (res.ok) {
          const data: Facility[] = await res.json();
          setFacilities(data);
          if (data.length > 0) setActiveFacility(data[0].id); // default pilih facility pertama
        }
      } catch (err) {
        console.error("Fetch facilities error:", err);
      }
    };
    fetchFacilities();
  }, []);

  // ambil facility aktif
  const currentFacility = facilities.find((f) => f.id === activeFacility);

  return (
    <motion.section
      className="px-4 md:px-16 py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      {/* Navigation */}
      <div className="flex overflow-x-auto no-scrollbar gap-6 mb-6">
        {facilities.map((fac) => (
          <motion.button
            key={fac.id}
            onClick={() => setActiveFacility(fac.id)}
            whileTap={{ scale: 0.95 }}
            className={`relative pb-2 text-base md:text-xl whitespace-nowrap transition-all duration-300 ${
              activeFacility === fac.id
                ? "text-[#583101] font-bold"
                : "text-gray-600"
            }`}
          >
            {fac.name}
            {activeFacility === fac.id && (
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#583101] rounded-full transition-all duration-300"></span>
            )}
          </motion.button>
        ))}
      </div>

      {/* Description */}
      {currentFacility && (
        <motion.p
          key={currentFacility.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 mb-8 text-center max-w-2xl mx-auto"
        >
          {currentFacility.description || "No description available."}
        </motion.p>
      )}

      {/* Gallery - Mobile Carousel */}
      <div className="block md:hidden overflow-x-auto no-scrollbar">
        <div className="flex gap-4">
          {currentFacility?.images.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="min-w-[280px] flex-shrink-0 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={img.url}
                alt={currentFacility?.name || "facility"}
                className="w-full h-64 object-cover"
                width={400}
                height={300}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery - Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {currentFacility?.images.map((img) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={img.url}
              alt={currentFacility?.name || "facility"}
              className="w-full h-[400px] object-cover"
              width={600}
              height={400}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
