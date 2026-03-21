import "dotenv/config";
import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./db/connectDB.js";
import { logger } from "./utils/logger.js";

const startServer = async () => {
  await connectDB();

  app.listen(env.port, () => {
    logger.info(`Backend server running at http://localhost:${env.port}`);
  });
};

startServer();
