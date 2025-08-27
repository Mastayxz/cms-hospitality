/*
  Warnings:

  - A unique constraint covering the columns `[singleton]` on the table `Hero` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Hero" ADD COLUMN     "singleton" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "Hero_singleton_key" ON "public"."Hero"("singleton");
