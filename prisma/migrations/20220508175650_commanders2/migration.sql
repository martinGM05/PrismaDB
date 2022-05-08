/*
  Warnings:

  - You are about to drop the column `lang` on the `Comanders` table. All the data in the column will be lost.
  - Added the required column `lange` to the `Comanders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comanders" DROP COLUMN "lang",
ADD COLUMN     "lange" TEXT NOT NULL;
