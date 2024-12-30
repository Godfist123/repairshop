import { NextRequest, NextResponse } from "next/server";
import { AppDataSource } from "@/config/data-source";
import { Customers } from "@/entities/Customers";

export async function GET(req: NextRequest) {
  try {
    await AppDataSource.initialize();
    const id = req.nextUrl.searchParams.get("id");
    const customer = await AppDataSource.getRepository(Customers).findOne({
      where: { customers_id: Number(id) },
    });
    return NextResponse.json(customer);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch customer" },
      { status: 500 }
    );
  }
}
