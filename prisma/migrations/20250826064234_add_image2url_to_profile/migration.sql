/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `image1Url` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image2Url` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Profile" DROP COLUMN "imageUrl",
ADD COLUMN     "image1Url" TEXT NOT NULL,
ADD COLUMN     "image2Url" TEXT NOT NULL;
