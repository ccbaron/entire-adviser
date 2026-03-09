import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Backend de Entire Adviser funcionando correctamente",
  });
});

app.use("/api/contact", contactRoutes);

export default app;
