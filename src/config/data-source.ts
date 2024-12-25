import "reflect-metadata";
import { DataSource } from "typeorm";
import { Customers } from "@/entities/Customers";
import { Tickets } from "@/entities/Tickets";

import * as dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_URL || "your-rds-endpoint",
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || "your-username",
  password: process.env.DATABASE_PASSWORD || "your-password",
  database: process.env.DATABASE_NAME || "your-database-name",
  synchronize: false, // Set to `false` in production and use migrations
  logging: true,
  entities: [Customers, Tickets], // Path to entity files
  migrations:
    process.env.NODE_ENV === "production"
      ? ["dist/src/migrations/*.{js}"] // Compiled migrations in production
      : ["src/migrations/*.{ts}"],
  subscribers: ["src/subscribers/*.{ts,js}"], // Optional: Path to subscribers
});
