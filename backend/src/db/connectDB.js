import mongoose from "mongoose";
import { env } from "../config/env.js";
import { logger } from "../utils/logger.js";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(env.mongodbUri);

    logger.info("MongoDB connected successfully");
  } catch (error) {
    logger.error({ err: error }, "MongoDB connection error");
    process.exit(1);
  }
};
