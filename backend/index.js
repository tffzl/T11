import express from "express";
import routes from "./routes.js";
// TODO: complete me (loading the necessary packages)
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

const app = express();

// TODO: complete me (CORS)
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use("", routes);

export default app;
