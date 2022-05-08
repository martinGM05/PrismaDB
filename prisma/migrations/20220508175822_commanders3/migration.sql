/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Comanders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Comanders_name_key" ON "Comanders"("name");
