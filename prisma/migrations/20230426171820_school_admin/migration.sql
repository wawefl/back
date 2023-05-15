-- CreateEnum
CREATE TYPE "RoleAdmin" AS ENUM ('DEFAULT', 'SECRETARY', 'ACCOUNTING', 'ASSISTANT', 'TRAINER', 'TEACHER', 'DIRECTOR');

-- CreateTable
CREATE TABLE "schools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "socialNetworks" JSONB NOT NULL,
    "openingHours" JSONB NOT NULL,

    CONSTRAINT "schools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "fistName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "RoleAdmin" NOT NULL DEFAULT 'DEFAULT',

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");
