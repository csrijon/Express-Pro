import express from "express";
import habitRoutes from "./routes/habit.js";
import loginRoutes from "./routes/login.js";
import {Signup} from "./models/schema.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/habit", habitRoutes);
app.use("/signup", loginRoutes);
app.use(express.json());


app.get("/",(req,res) => {
  res.render("signup");
});
app.get("/index", (req, res) => {
  res.render("index");
})
app.post("/signup", async (req, res) => {
  const { Name, Email, Password } = req.body;
  const newsignup = new Signup({Name, Email, Password});
  console.log(Name, Email, Password);
  await newsignup.save();
})
app.post("/login", async (req, res) => {
  const {Loginemail, Loginpassword} = req.body;
  const user = await Signup.findOne({Email: Loginemail, Password: Loginpassword});
  if (user) {
    console.log("kam khatam");
    res.redirect("/index");
   console.log("done")
  }else{
    console.log("not done")
  }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});