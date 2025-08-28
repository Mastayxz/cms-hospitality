import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ success: true });

  // hapus token utama
  res.cookies.set("admin_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0),
  });

  // hapus cookie flag untuk UI
  res.cookies.set("is_admin", "", {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0),
  });

  return res;
}
