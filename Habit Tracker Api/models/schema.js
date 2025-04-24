import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1:27017/habit-tracker");

const loginSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
});

 export const Signup = mongoose.model("Signup", loginSchema)
