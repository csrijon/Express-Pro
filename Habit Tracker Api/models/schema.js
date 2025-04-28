import mongoose from "mongoose";

// await mongoose.connect("mongodb://127.0.0.1:27017/habit-tracker");
mongoose.connect("mongodb://127.0.0.1:27017/habit-tracker")
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌", err);
  });

const loginSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
});

const addhabitSchema = new mongoose.Schema({
  habitsname: {
      type: String,
      required: true,
      trim: true
  },
  habitday: {
      type: String,
      required: true,
      trim: true
  },
  habittime: {
      type: String,
      required: true,
      trim: true
  },
  userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Signup",
      required: true
  }
});


 export const Signup = mongoose.model("Signup", loginSchema)
 export const Addhabit = mongoose.model("Addhabit", addhabitSchema)
 