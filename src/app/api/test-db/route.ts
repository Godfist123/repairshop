import type { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    client.release();

    return new Response(JSON.stringify({ time: result.rows[0] }), {
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
