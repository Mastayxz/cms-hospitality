import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, price, description } = await req.json();

  // Cek jumlah kamar yang sudah ada
  const count = await prisma.room.count();
  if (count >= 6) {
    return new Response(JSON.stringify({ error: "Maximum 6 rooms allowed" }), {
      status: 400,
    });
  }

  // Jika belum mencapai batas, buat room baru
  const room = await prisma.room.create({
    data: { name, price, description },
  });

  return new Response(JSON.stringify(room), { status: 200 });
}

export async function GET() {
  const rooms = await prisma.room.findMany({
    include: { images: true }, // ambil sekaligus semua gambar
  });
  return new Response(JSON.stringify(rooms), { status: 200 });
}

// Update Room
export async function PUT(req: Request) {
  const { id, name, price, description } = await req.json();

  if (!id) {
    return new Response(JSON.stringify({ error: "Room id required" }), {
      status: 400,
    });
  }

  const updatedRoom = await prisma.room.update({
    where: { id: Number(id) }, // pastikan Int
    data: { name, price, description },
  });

  return new Response(JSON.stringify(updatedRoom), { status: 200 });
}
