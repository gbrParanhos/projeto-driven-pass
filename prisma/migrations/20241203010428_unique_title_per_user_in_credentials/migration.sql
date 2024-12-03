/*
  Warnings:

  - A unique constraint covering the columns `[title,user_id]` on the table `credentials` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "credentials_title_user_id_key" ON "credentials"("title", "user_id");
