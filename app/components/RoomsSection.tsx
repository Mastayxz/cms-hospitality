"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { motion } from "framer-motion";

interface RoomImage {
  id: number;
  url: string;
}

interface Room {
  id: number;
  name: string;
  price: number;
  description?: string;
  images?: RoomImage[];
}

interface Props {
  rooms: Room[];
}

export default function RoomsSection({ rooms }: Props) {
  const [activeRoomId, setActiveRoomId] = useState<number | null>(null);

  const toggleDescription = (roomId: number) => {
    setActiveRoomId((prev) => (prev === roomId ? null : roomId));
  };

  return (
    <section className="px-4 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          onClick={() => toggleDescription(room.id)}
        >
          <div className="relative w-full aspect-[4/3]">
            {room.images && room.images.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-full"
              >
                {room.images.map((img) => (
                  <SwiperSlide key={img.id}>
                    <Image
                      src={img.url}
                      alt={room.name}
                      fill
                      className="object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                No Image
              </div>
            )}
            {/* Description Overlay */}
            {/* Description Overlay */}
            {activeRoomId === room.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                {/* Lapisan gelap tapi transparan */}
                <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" />

                {/* Konten teks */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative px-6 py-4"
                >
                  <p className="text-white text-sm md:text-base lg:text-lg font-medium text-center leading-relaxed max-w-md mx-auto">
                    {room.description || "No description provided"}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Price */}
          <span className="absolute top-2 left-2 bg-white bg-opacity-80 text-[#583101] px-3 py-1 text-sm md:text-base rounded z-10">
            {`Rp ${room.price.toLocaleString("id-ID")} / night`}
          </span>

          {/* Name */}
          <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 text-sm md:text-base rounded z-10">
            {room.name}
          </span>
        </div>
      ))}
    </section>
  );
}
