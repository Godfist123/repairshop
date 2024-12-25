import { AppDataSource } from "../config/data-source";

export const connectToDatabase = async () => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log("Database connected successfully");
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};
