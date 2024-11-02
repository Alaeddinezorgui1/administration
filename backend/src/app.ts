import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user";
import materialRoutes from "./routes/material";
import connectDB from "./db/db";
import path from "path";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/users", userRoutes); // Mount your router
app.use("/material", materialRoutes);
mongoose
  .connect(process.env.MONGODB_URI!, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
