import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "rahasia"
);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ⛔ Jangan proteksi login page
  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  // ✅ Proteksi semua /admin/*
  if (pathname.startsWith("/admin")) {
    const token = req.cookies.get("admin_token")?.value;
    console.log("👉 TOKEN DARI COOKIE:", token);

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    try {
      await jwtVerify(token, JWT_SECRET);
      console.log("✅ Token valid");
      return NextResponse.next();
    } catch (err) {
      console.error("❌ JWT Error:", err);
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
