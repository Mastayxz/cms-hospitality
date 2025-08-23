"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="p-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-bold text-2xl text-[#583101]">Diamond Luxury</h1>

        {/* Navigation */}
        <nav
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-6 md:p-0 shadow-md md:shadow-none`}
        >
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#rooms" className="hover:underline">
            Rooms
          </a>
          <a href="/booking">
            <div className="bg-[#583101] px-4 py-2 text-white hover:bg-[#754975] transition-colors">
              Booking Now
            </div>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#583101] text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
