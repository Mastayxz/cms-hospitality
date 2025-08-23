"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Check-in starts at 2 PM and check-out is until 12 PM. Early check-in and late check-out may be available upon request.",
  },
  {
    question: "Do you offer airport shuttle service?",
    answer:
      "Yes, we provide airport shuttle service with an additional charge. Please contact our reception for booking.",
  },
  {
    question: "Is breakfast included in the room rate?",
    answer:
      "Yes, a complimentary breakfast is included for all room bookings. You can enjoy it at our main restaurant from 7 AM to 10 AM.",
  },
  {
    question: "Do you have free Wi-Fi?",
    answer:
      "Yes, free high-speed Wi-Fi is available in all rooms and public areas of the hotel.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      className="px-6 md:px-16 py-16 mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="max-w-3xl mx-auto w-full text-center">
        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <h2 className="text-3xl font-semibold">FAQs</h2>
          <img
            src="/shape1.png"
            className="w-[135px] h-[24px]"
            alt="Shape decoration"
          />
        </div>

        <h2 className="text-5xl font-bold mb-4 text-black leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto mb-10">
          Below are some frequently asked questions about our hotel. If you have
          any other questions, or need further clarification, please don’t
          hesitate to contact us. We're here to help.
        </p>

        {/* FAQ List */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl divide-y divide-[#583101]">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-5 text-left text-lg font-medium text-gray-900 hover:text-black transition"
                >
                  {faq.question}
                  <span className="text-2xl font-bold">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    activeIndex === index
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.5 }}
                  className="pb-5 text-gray-700 text-base leading-relaxed text-left"
                >
                  {faq.answer}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Button Contact */}
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-block bg-[#583101] text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-gray-800 transition"
          >
            Have More Questions?
          </a>
        </div>
      </div>
    </motion.section>
  );
}
