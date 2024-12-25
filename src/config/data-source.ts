import { DataSource } from "typeorm";
import { User } from "@/entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_URL || "your-rds-endpoint",
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER || "your-username",
  password: process.env.DATABASE_PASSWORD || "your-password",
  database: process.env.DATABASE_NAME || "your-database-name",
  synchronize: true, // Set to `false` in production and use migrations
  logging: true,
  entities: [User], // Path to entity files
  migrations: ["src/migrations/**/*.{ts,js}"], // Path to migration files
  subscribers: ["src/subscribers/**/*.{ts,js}"], // Optional: Path to subscribers
});
