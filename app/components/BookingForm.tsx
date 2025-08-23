"use client";
import { useState, useMemo } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [roomType, setRoomType] = useState("Standard");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  // minimal tanggal check-in hari ini
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
    return Math.max(0, (b - a) / (1000 * 60 * 60 * 24));
  }, [checkIn, checkOut]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    if (!name || !email || !checkIn || !checkOut) {
      setMsg("Mohon lengkapi semua data.");
      return;
    }

    const phone = "6287852721886";
    const text = encodeURIComponent(
      `Halo, saya ingin melakukan booking:
- Nama: ${name}
- Email: ${email}
- Tipe Kamar: ${roomType}
- Check-in: ${checkIn}
- Check-out: ${checkOut}
- Malam: ${nights}
- Tamu: ${guests}
- Kamar: ${rooms}

Apakah tersedia?`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  }

  return (
    <section className="relative md:col-span-2">
      <div className="max-w-3xl mx-auto p-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b border-gray-400 bg-transparent px-1 py-2 text-gray-900 focus:outline-none focus:border-[#583101]"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-400 bg-transparent px-1 py-2 text-gray-900 focus:outline-none focus:border-[#583101]"
              placeholder="Enter your email address"
            />
          </div>

          {/* Room Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Room Type
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full border-b border-gray-400 bg-transparent px-1 py-2 text-gray-900 focus:outline-none focus:border-[#583101]"
            >
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          {/* Guests & Rooms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Guests
              </label>
              <input
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full border-b border-gray-400 bg-transparent px-1 py-2 text-gray-900 focus:outline-none focus:border-[#583101]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rooms
              </label>
              <input
                type="number"
                min={1}
                value={rooms}
                onChange={(e) => setRooms(parseInt(e.target.value))}
                className="w-full border-b border-gray-400 bg-transparent px-1 py-2 text-gray-900 focus:outline-none focus:border-[#583101]"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-in
              </label>
              <input
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border-b border-gray-400 bg-transparent px-1 py-2 text-gray-900 focus:outline-none focus:border-[#583101]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-out
              </label>
              <input
                type="date"
                min={minCheckout}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border-b border-gray-400 bg-transparent px-1 py-2 text-gray-900 focus:outline-none focus:border-[#583101]"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#583101] text-white py-4 rounded-lg font-semibold hover:bg-[#452500] transition"
          >
            Book Now
          </button>
        </form>

        {/* Info */}
        <div className="mt-6 text-center">
          {nights > 0 && (
            <p className="text-gray-700">
              Durasi menginap:{" "}
              <span className="font-semibold">{nights} malam</span>
            </p>
          )}
          {msg && <p className="text-red-500 mt-2">{msg}</p>}
        </div>
      </div>
    </section>
  );
}
