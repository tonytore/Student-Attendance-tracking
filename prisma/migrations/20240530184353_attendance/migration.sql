/*
  Warnings:

  - The primary key for the `Grades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Students` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Grades" DROP CONSTRAINT "Grades_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Grades_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Grades_id_seq";

-- AlterTable
ALTER TABLE "Students" DROP CONSTRAINT "Students_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Students_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Students_id_seq";

-- CreateTable
CREATE TABLE "Attendance" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "present" BOOLEAN NOT NULL DEFAULT false,
    "day" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);
