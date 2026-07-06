import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const buildings = await prisma.building.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(buildings);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to fetch buildings" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const building = await prisma.building.create({
      data: {
        name: body.name,
        code: body.code,
        address: body.address,
        city: body.city,
        state: body.state,
        pincode: body.pincode,
        managerName: body.managerName,
        managerPhone: body.managerPhone,
      },
    });

    return NextResponse.json(building);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to save building" },
      { status: 500 }
    );
  }
}