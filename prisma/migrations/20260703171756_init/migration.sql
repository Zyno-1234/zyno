-- CreateTable
CREATE TABLE "Building" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Room" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "roomNumber" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "sharing" INTEGER NOT NULL,
    "buildingId" INTEGER NOT NULL,
    CONSTRAINT "Room_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bed" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bedNumber" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,
    CONSTRAINT "Bed_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tenant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "gender" TEXT NOT NULL,
    "company" TEXT,
    "employeeId" TEXT,
    "moveInDate" DATETIME NOT NULL,
    "emergencyContact" TEXT,
    "remarks" TEXT,
    "bedId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Tenant_bedId_fkey" FOREIGN KEY ("bedId") REFERENCES "Bed" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_bedId_key" ON "Tenant"("bedId");
