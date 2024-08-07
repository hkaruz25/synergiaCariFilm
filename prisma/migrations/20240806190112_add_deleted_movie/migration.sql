/*
  Warnings:

  - Added the required column `deleted` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN "deleted" BOOLEAN NOT NULL DEFAULT FALSE;
