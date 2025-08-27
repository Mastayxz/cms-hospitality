import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { roomId, url } = await req.json();
  const roomImage = await prisma.roomImage.create({
    data: { roomId, url },
  });
  return new Response(JSON.stringify(roomImage), { status: 200 });
}

export async function GET() {
  const roomImages = await prisma.roomImage.findMany();
  return new Response(JSON.stringify(roomImages), { status: 200 });
}

export async function PUT(req: Request) {
  const { roomId, url } = await req.json();

  // update gambar utama (misal gambar pertama)
  const existing = await prisma.roomImage.findFirst({ where: { roomId } });

  let updated;
  if (existing) {
    updated = await prisma.roomImage.update({
      where: { id: existing.id },
      data: { url },
    });
  } else {
    updated = await prisma.roomImage.create({
      data: { roomId, url },
    });
  }

  return new Response(JSON.stringify(updated), { status: 200 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.roomImage.delete({ where: { id } });
  return new Response(null, { status: 204 });
}
