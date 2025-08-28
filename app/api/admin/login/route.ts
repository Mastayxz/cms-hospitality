import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); // sesuaikan path prisma client kamu

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "rahasia"
);

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    // ✅ cari admin dari database
    const admin = await prisma.admin.findUnique({
      where: { username },
    });

    if (!admin) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ✅ cek password (plaintext vs hash)
    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ✅ bikin token pakai jose
    const token = await new SignJWT({
      id: admin.id,
      username: admin.username,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1d") // 1 hari expired
      .sign(JWT_SECRET);

    // ✅ simpan token ke cookie
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 hari
    });
    res.cookies.set("is_admin", "true", {
      httpOnly: false, // bisa diakses client
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return res;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
