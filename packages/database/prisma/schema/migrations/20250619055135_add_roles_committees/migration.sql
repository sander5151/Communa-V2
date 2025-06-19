-- CreateEnum
CREATE TYPE "RoleType" AS ENUM ('BOARD', 'FACTION');

-- CreateTable
CREATE TABLE "board_faction_role" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "RoleType" NOT NULL,
    "function" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "board_faction_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "committee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "committee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "committee_member" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "committeeId" TEXT NOT NULL,
    "function" TEXT,
    "acceptedAt" TIMESTAMP(3),
    "joinedAt" TIMESTAMP(3) NOT NULL,
    "leftAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "committee_member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "committee_member_userId_committeeId_key" ON "committee_member"("userId", "committeeId");

-- AddForeignKey
ALTER TABLE "board_faction_role" ADD CONSTRAINT "board_faction_role_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "committee_member" ADD CONSTRAINT "committee_member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "committee_member" ADD CONSTRAINT "committee_member_committeeId_fkey" FOREIGN KEY ("committeeId") REFERENCES "committee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
