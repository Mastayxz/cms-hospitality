// import type { Metadata } from "next";

// import "./globals.css";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Diamond Luxury",
  description: "A beautiful hotel in Bali with luxury rooms and services",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="p-6 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <h1 className="font-bold text-2xl text-[#583101]">
              Diamond Luxury
            </h1>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/" className="hover:underline">
                About
              </a>
              <a href="/rooms" className="hover:underline">
                Rooms
              </a>
              <a href="" className="hover:underline">
                Promotion
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </nav>

            {/* Mobile Menu (optional) */}
            <button className="md:hidden text-[#583101]">☰</button>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>
        <footer className="p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Diamond Luxury Hotel. All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
