import mongoose from "mongoose";

const uri: string = process.env.MONGODB_URI || "mongodb://localhost:27017/mydb";

async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB with Mongoose");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

export default connectDB;
