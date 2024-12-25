import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";
import { AppDataSource } from "@/config/data-source";
import { User } from "@/entities/User";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectToDatabase();
    const userRepository = AppDataSource.getRepository(User);

    // Create a new user
    const newUser = userRepository.create({
      name: "John Doe",
      email: "john@example.com",
    });
    await userRepository.save(newUser);

    // Fetch all users
    const users = await userRepository.find();

    return new Response(JSON.stringify({ users }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Database connection error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to connect to the database" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
