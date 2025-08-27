import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, description } = await req.json();

  // Cek jumlah kamar yang sudah ada
  const count = await prisma.facility.count();
  if (count >= 6) {
    return new Response(JSON.stringify({ error: "Maximum 6 rooms allowed" }), {
      status: 400,
    });
  }
  // Jika belum mencapai batas, buat facility baru
  const facility = await prisma.facility.create({
    data: { name, description },
  });

  return new Response(JSON.stringify(facility), { status: 200 });
}

export async function GET() {
  const facilities = await prisma.facility.findMany({
    include: { images: true },
  });
  return new Response(JSON.stringify(facilities), { status: 200 });
}
