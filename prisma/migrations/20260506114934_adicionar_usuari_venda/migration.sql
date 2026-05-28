/*
  Warnings:

  - Added the required column `usuarioId` to the `Venda` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "usuario_role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Venda" ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "role" "usuario_role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Venda" ADD CONSTRAINT "Venda_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
