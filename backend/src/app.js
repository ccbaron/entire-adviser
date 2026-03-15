import express from "express";
import cors from "cors";
import helmet from 'helmet';
import contactRoutes from "./routes/contact.routes.js";
import { env } from "./config/env.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: env.frontendUrl,
  }),
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Backend de Entire Adviser funcionando correctamente",
  });
});

app.use("/api/contact", contactRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
