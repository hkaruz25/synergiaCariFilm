-- DropForeignKey
ALTER TABLE "history" DROP CONSTRAINT "history_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "history" DROP CONSTRAINT "history_user_id_fkey";

-- AlterTable
ALTER TABLE "history" ALTER COLUMN "movie_id" DROP NOT NULL,
ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
