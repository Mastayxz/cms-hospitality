import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET profile (ambil 1 row aja, karena cuma 1 About)
export async function GET() {
  try {
    const profile = await prisma.profile.findFirst();
    return NextResponse.json(profile, { status: 200 });
  } catch (error) {
    console.error("Profile fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}

// CREATE/UPDATE profile
export async function POST(req: NextRequest) {
  try {
    const { description, image1Url, image2Url } = await req.json();

    // cek apakah profile sudah ada
    const existingProfile = await prisma.profile.findFirst();

    let profile;
    if (existingProfile) {
      // update
      profile = await prisma.profile.update({
        where: { id: existingProfile.id },
        data: { description, image1Url, image2Url },
      });
    } else {
      // create
      profile = await prisma.profile.create({
        data: { description, image1Url, image2Url },
      });
    }

    return NextResponse.json(profile, { status: 200 });
  } catch (error) {
    console.error("Profile save error:", error);
    return NextResponse.json(
      { error: "Failed to save profile" },
      { status: 500 }
    );
  }
}

// DELETE profile
export async function DELETE() {
  try {
    const existingProfile = await prisma.profile.findFirst();
    if (!existingProfile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    await prisma.profile.delete({ where: { id: existingProfile.id } });
    return NextResponse.json({ message: "Profile deleted" }, { status: 200 });
  } catch (error) {
    console.error("Profile delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete profile" },
      { status: 500 }
    );
  }
}
