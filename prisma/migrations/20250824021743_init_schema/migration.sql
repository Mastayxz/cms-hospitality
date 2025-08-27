/*
  Warnings:

  - You are about to drop the column `features` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `hotelId` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the `Hotel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_hotelId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Room" DROP CONSTRAINT "Room_hotelId_fkey";

-- AlterTable
ALTER TABLE "public"."Room" DROP COLUMN "features",
DROP COLUMN "hotelId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT;

-- DropTable
DROP TABLE "public"."Hotel";

-- DropTable
DROP TABLE "public"."Image";

-- CreateTable
CREATE TABLE "public"."Admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RoomImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,

    CONSTRAINT "RoomImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Facility" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FacilityImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "facilityId" INTEGER NOT NULL,

    CONSTRAINT "FacilityImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Hero" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Profile" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FAQ" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "public"."Admin"("username");

-- AddForeignKey
ALTER TABLE "public"."RoomImage" ADD CONSTRAINT "RoomImage_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "public"."Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FacilityImage" ADD CONSTRAINT "FacilityImage_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "public"."Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;
