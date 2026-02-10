// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firebaseId: { type: String, required: true, unique: true }, // The 'uid' from Firebase
  email: { type: String, required: true },
  username: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", userSchema);
