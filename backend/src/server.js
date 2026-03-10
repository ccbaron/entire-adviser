import "dotenv/config";
import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./db/connectDB.js";

const startServer = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await connectDB();

    console.log("MongoDB connected successfully");

    app.listen(env.port, () => {
      console.log(`Server running at http://localhost:${env.port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
