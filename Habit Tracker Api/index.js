import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",(req,res) => {
  res.render("index");
});
app.get("/habit",(req,res) => {
  res.render("habit");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});