import express from "express";
import { Server } from "socket.io";
import http from "http";
import Realtimechat from "./connect.js";

const app = express();
const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));
app.set("view engine", "ejs");
export {io};
 Realtimechat(io)
server.listen(3000, () => {
    console.log("server is listening on port 3000");
})

app.get("/",(req,res) => {
  res.render("index");
})
