import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// UPDATE BUILDING
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    const { id } = await params;

    const building = await prisma.building.update({
      where: {
        id: Number(id),
      },
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
      { error: "Unable to update building" },
      { status: 500 }
    );
  }
}

// DELETE BUILDING
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.building.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to delete building.",
      },
      { status: 500 }
    );
  }
}