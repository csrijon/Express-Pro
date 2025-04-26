import express from "express";
import habitRoutes from "./routes/habit.js";
import loginRoutes from "./routes/login.js";
import { Signup, Addhabit } from "./models/schema.js";

const app = express();
const port = 3000;

// Middleware
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // <-- Needed for form data!
app.use(express.json()); // <-- Good to have for API calls

// Routes
app.use("/habit", habitRoutes);
app.use("/signup", loginRoutes);

// Views
app.get("/", (req, res) => {
  res.render("signup"); // login/signup page
});

app.get("/index", (req, res) => {
  res.render("index"); // after login success
});

app.post("/signup", async (req, res) => {
  const { Name, Email, Password } = req.body;
  const newsignup = new Signup({ Name, Email, Password });
  await newsignup.save();
  console.log("User signed up:", Name, Email);
  res.redirect("/"); // Go to login page
});

app.post("/login", async (req, res) => {
  const { Loginemail, Loginpassword } = req.body;
  const user = await Signup.findOne({ Email: Loginemail, Password: Loginpassword });
  if (user) {
    console.log("Login successful:", user.Email);
    res.redirect("/index");
  }
   else {
    console.log("Login failed");
    res.send("Invalid email or password");
  }
});
app.post("/addhabit", (req, res) => {
  const { habitsname, habitday, habittime } = req.body;
  console.log(habitsname, habitday, habittime);
  const userhabit = new Addhabit({ habitsname, habitday, habittime });
  userhabit.save();
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
