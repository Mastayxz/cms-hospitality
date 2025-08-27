import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { facilityId, url } = await req.json();

  if (!facilityId || !url) {
    return new Response(
      JSON.stringify({ error: "facilityId and url are required" }),
      { status: 400 }
    );
  }

  const facilityImage = await prisma.facilityImage.create({
    data: { facilityId, url },
  });

  return new Response(JSON.stringify(facilityImage), { status: 200 });
}

export async function GET() {
  const facilityImages = await prisma.facilityImage.findMany();
  return new Response(JSON.stringify(facilityImages), { status: 200 });
}
