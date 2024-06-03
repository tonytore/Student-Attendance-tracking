/*
  Warnings:

  - You are about to drop the column `gradeId` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `attendanceId` on the `Grades` table. All the data in the column will be lost.
  - You are about to drop the column `attendanceId` on the `Students` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_gradeId_fkey";

-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_studentId_fkey";

-- DropIndex
DROP INDEX "Attendance_gradeId_key";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "gradeId",
DROP COLUMN "studentId";

-- AlterTable
ALTER TABLE "Grades" DROP COLUMN "attendanceId";

-- AlterTable
ALTER TABLE "Students" DROP COLUMN "attendanceId";
