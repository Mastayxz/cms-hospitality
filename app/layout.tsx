"use client";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
// export const metadata: Metadata = {
//   title: "Diamond Luxury",
//   description: "A beautiful hotel in Bali with luxury rooms and services",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  return (
    <html lang="en">
      <body className={isAdmin ? "bg-gray-50" : "bg-white"}>
        {!isAdmin && <Navbar />}
        <main className="min-h-screen">{children}</main>
        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}
