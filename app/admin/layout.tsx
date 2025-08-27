"use client";
import Link from "next/link";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-6 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Diamond Luxury</h1>
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/admin" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#profile"
                  className="hover:underline flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="p-8">{children}</main>
    </div>
  );
}
