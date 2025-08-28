"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const hasFlag = document.cookie.includes("is_admin=true");
    setIsLoggedIn(hasFlag);
  }, []);

  const handleLogout = async () => {
    const res = await fetch("/api/admin/logout", {
      method: "POST",
    });

    if (res.ok) {
      // hapus state navbar langsung
      setIsLoggedIn(false);
      // redirect manual
      window.location.href = "/admin/login";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-6 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Diamond Luxury</h1>
          <nav>
            <ul className="flex items-center gap-6">
              {isLoggedIn ? (
                <>
                  <li>
                    <Link href="/admin" className="hover:underline">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="hover:underline">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/login" className="hover:underline">
                      Admin Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>

      <main className="p-8">{children}</main>
    </div>
  );
}
