"use client";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function CheckAvailability() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [msg, setMsg] = useState<string | null>(null);

  // minimal tanggal check-in = hari ini
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const minCheckout = useMemo(() => {
    if (!checkIn) return today;
    const d = new Date(checkIn);
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }, [checkIn, today]);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const a = new Date(checkIn).getTime();
    const b = new Date(checkOut).getTime();
    const diff = Math.max(0, (b - a) / (1000 * 60 * 60 * 24));
    return diff;
  }, [checkIn, checkOut]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    if (!checkIn || !checkOut) {
      setMsg("Silakan pilih tanggal check-in dan check-out.");
      return;
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      setMsg("Tanggal check-out harus setelah check-in.");
      return;
    }
    if (guests < 1 || rooms < 1) {
      setMsg("Jumlah tamu/kamar minimal 1.");
      return;
    }

    const phone = "6287852721886"; // nomor WA
    const text = encodeURIComponent(
      `Halo, saya ingin cek ketersediaan kamar:
- Check-in: ${checkIn}
- Check-out: ${checkOut}
- Malam: ${nights}
- Tamu: ${guests}
- Kamar: ${rooms}

Apakah tersedia?`
    );
    const waUrl = `https://wa.me/${phone}?text=${text}`;
    window.open(waUrl, "_blank");
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-6 md:px-10 py-6 bg-[#583101] shadow-sm"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#ffedd8]">
        Check Availability
      </h3>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6"
      >
        {/* Check-in */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <label className="text-sm font-medium mb-2 text-[#ffedd8]">
            Check-in
          </label>
          <input
            type="date"
            className="w-full rounded-lg text-[#583101] bg-[#ffedd8] border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </motion.div>

        {/* Check-out */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <label className="text-sm font-medium mb-2 text-[#ffedd8]">
            Check-out
          </label>
          <input
            type="date"
            className="w-full rounded-lg text-[#583101] bg-[#ffedd8] border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
            min={minCheckout}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </motion.div>

        {/* Guests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <label className="text-sm font-medium mb-2 text-[#ffedd8]">
            Guests
          </label>
          <input
            type="number"
            min={1}
            className="w-full rounded-lg text-[#583101] bg-[#ffedd8] border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value || "1"))}
          />
        </motion.div>

        {/* Rooms */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <label className="text-sm font-medium mb-2 text-[#ffedd8]">
            Rooms
          </label>
          <input
            type="number"
            min={1}
            className="w-full rounded-lg text-[#583101] bg-[#ffedd8] border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
            value={rooms}
            onChange={(e) => setRooms(parseInt(e.target.value || "1"))}
          />
        </motion.div>

        {/* Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-end"
        >
          <button
            type="submit"
            className="w-full md:w-auto bg-[#ffedd8] text-[#583101] px-6 py-3 rounded-lg font-medium hover:bg-[#e6d2b8] hover:scale-105 transition duration-300 border border-white cursor-pointer"
          >
            Cek Availability
          </button>
        </motion.div>
      </form>

      {/* Info bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 flex flex-wrap items-center gap-4 text-sm"
      >
        <span className="inline-block rounded-full border px-3 py-1 text-[#ffedd8] border-[#ffedd8]">
          {nights > 0
            ? `${nights} malam`
            : "Pilih tanggal untuk melihat durasi"}
        </span>
        {msg && <span className="text-red-300">{msg}</span>}
      </motion.div>
    </motion.section>
  );
}
