import express from "express";
import jwt from "jsonwebtoken"; // JWT import
import { Signup, Addhabit } from "./models/schema.js";
import habitRoutes from "./routes/habit.js";
import loginRoutes from "./routes/login.js";
import dotenv from "dotenv"; // To load environment variables

dotenv.config(); // Load environment variables from .env

const app = express();
const port = 5000;

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET || "yourSecretKey";  // Use env variable

// Middleware
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/habit", habitRoutes);
app.use("/signup", loginRoutes);

// Views
app.get("/", (req, res) => {
  res.render("signup");
});

app.get("/index", (req, res) => {
  res.render("index");
});

// Signup Route
app.post("/signup", async (req, res) => {
  const { Name, Email, Password } = req.body;
  try {
    const newsignup = new Signup({ Name, Email, Password });
    await newsignup.save();
    console.log("User signed up:", Name, Email);
    res.redirect("/");
  } catch (error) {
    console.error("Signup failed:", error);
    res.status(500).json({ error: "Signup failed" });
  }
});

// Login Route (Generate JWT Token)
app.post("/login", async (req, res) => {
  const { Loginemail, Loginpassword } = req.body;
  const user = await Signup.findOne({ Email: Loginemail, Password: Loginpassword });

  if (user) {
    console.log("Login successful:", user.Email);
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

    // Send token in response, frontend should store it
    res.json({ token });
  } else {
    console.log("Login failed");
    res.status(401).json({ error: "Invalid email or password" });
  }
});

// Middleware to Verify Token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(' ')[1]; // "Bearer token"

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
// Add Habit Route (Protected with Token)
app.post("/addhabit", verifyToken, async (req, res) => {
  const { habitsname, habitday, habittime } = req.body;
  console.log(habitsname, habitday, habittime);

  const userhabit = new Addhabit({ 
    habitsname, 
    habitday, 
    habittime, 
    userid: req.userId 
  });

  try {
    await userhabit.save();
    res.json({ message: "Habit added successfully" });
  } catch (error) {
    console.error("Failed to add habit:", error);
    res.status(500).json({ error: "Failed to add habit" });
  }
});
// Fetch Habit Route (Protected with Token)
app.get("/fetchhabit", verifyToken, async (req, res) => {
  try {
    const userhabit = await Addhabit.find({ userid: req.userId });
    res.json(userhabit);
  } catch (error) {
    console.error("Failed to fetch habits:", error);
    res.status(500).json({ error: "Failed to fetch habits" });
  }
});
// Server start
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
