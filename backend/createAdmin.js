import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config({ path: "./.env" });

console.log("Mongo URI:", process.env.MONGO_URI); // debug line
await mongoose.connect(
    "mongodb+srv://jeffomullo559:jeff2026@cluster0.l7x14.mongodb.net/library?retryWrites=true&w=majority"
  );
async function createAdmin() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  await User.create({
    name: "Main Librarian",
    email: "librarian@library.com",
    password: hashedPassword,
    role: "librarian",
  });

  console.log("✅ Librarian created successfully");
  process.exit();
}

createAdmin();