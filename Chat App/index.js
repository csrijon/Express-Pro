import express from "express";
import https from "https";
import { Server } from "socket.io";

const port = 3000;
const app = express();

app.get("/", (req,res) => {
  res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
