import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import UserRoutes from "./routes/UserRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/api/user", UserRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
  });
});
