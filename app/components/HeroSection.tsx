"use client";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  height?: string; // optional, biar bisa atur tinggi berbeda
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  height = "h-[800px]",
}: HeroSectionProps) {
  return (
    <section
      className={`${height} bg-cover bg-center flex items-center justify-center`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className=" p-8 text-center rounded-lg"
      >
        <h1 className="text-5xl font-bold text-[#ffedd8] mb-6">{title}</h1>
        <h2 className="text-3xl font-medium text-[#ffedd8]">{subtitle}</h2>
      </motion.div>
    </section>
  );
}
