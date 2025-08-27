import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Prisma client reuse (biar tidak leak di dev mode)
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// ------------------ POST ------------------
export async function POST(req: NextRequest) {
  try {
    const { title, subtitle, imageUrl } = await req.json();

    // Cari hero (singleton row)
    const existingHero = await prisma.hero.findUnique({
      where: { singleton: true },
    });

    let hero;
    if (existingHero) {
      // Update hero
      hero = await prisma.hero.update({
        where: { id: existingHero.id },
        data: { title, subtitle, imageUrl },
      });
    } else {
      // Create baru dengan singleton=true
      hero = await prisma.hero.create({
        data: { title, subtitle, imageUrl, singleton: true },
      });
    }

    return NextResponse.json(hero, { status: 200 });
  } catch (error) {
    console.error("Hero POST error:", error);
    return NextResponse.json(
      { error: error || "Failed to save hero" },
      { status: 500 }
    );
  }
}

// ------------------ GET ------------------
export async function GET() {
  try {
    const hero = await prisma.hero.findUnique({
      where: { singleton: true },
    });
    return NextResponse.json(hero, { status: 200 });
  } catch (error) {
    console.error("Hero GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch hero" },
      { status: 500 }
    );
  }
}

// ------------------ DELETE ------------------
export async function DELETE() {
  try {
    const existingHero = await prisma.hero.findUnique({
      where: { singleton: true },
    });

    if (!existingHero) {
      return NextResponse.json({ error: "Hero not found" }, { status: 404 });
    }

    await prisma.hero.delete({ where: { id: existingHero.id } });

    return NextResponse.json({ message: "Hero deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
