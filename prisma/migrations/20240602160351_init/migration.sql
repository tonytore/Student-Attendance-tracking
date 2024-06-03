/*
  Warnings:

  - You are about to drop the column `date` on the `Attendance` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[gradeId]` on the table `Attendance` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gradeId` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `day` on the `Attendance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `attendanceId` to the `Grades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attendanceId` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "date",
ADD COLUMN     "gradeId" TEXT NOT NULL,
DROP COLUMN "day",
ADD COLUMN     "day" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Grades" ADD COLUMN     "attendanceId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Students" ADD COLUMN     "attendanceId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_gradeId_key" ON "Attendance"("gradeId");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grades"("id") ON DELETE CASCADE ON UPDATE CASCADE;
