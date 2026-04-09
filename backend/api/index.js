import "dotenv/config";
import app from "../src/app.js";
import { connectDB } from "../src/db/connectDB.js";

await connectDB();

export default app;
