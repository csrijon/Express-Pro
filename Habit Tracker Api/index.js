import express from "express";
import habitRoutes from "./routes/habit.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/habit", habitRoutes);

app.get("/",(req,res) => {
  res.render("index");
});
app.get("/login",(req,res) => {
  res.render("login");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});