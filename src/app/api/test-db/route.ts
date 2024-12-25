import "reflect-metadata";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { AppDataSource } from "@/config/data-source";
import { Customers } from "@/entities/Customers";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const CustomersRepository = AppDataSource.getRepository(Customers);

    // Define initial customer data
    const initialCustomers = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        address1: "123 Main St",
        address2: "Apt 4B",
        city: "New York",
        state: "NY",
        postcode: "10001",
        notes: "Customer since 2020",
        isActive: true,
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phone: "987-654-3210",
        address1: "456 Oak St",
        address2: null,
        city: "Los Angeles",
        state: "CA",
        postcode: "90001",
        notes: "VIP customer",
        isActive: true,
      },
    ];

    // Insert customers individually
    for (const customerData of initialCustomers) {
      const customer = CustomersRepository.create(customerData); // Create a new entity instance
      await CustomersRepository.save(customer); // Save the instance to the database
    }

    // Fetch all customers
    const allCustomers = await CustomersRepository.find();

    return NextResponse.json({ allCustomers }, { status: 200 });
  } catch (err) {
    console.error("Database connection error:", err);
    return NextResponse.json(
      { error: "Failed to connect to the database" },
      { status: 500 }
    );
  }
}
