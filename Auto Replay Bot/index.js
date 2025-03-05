import express from "express";
import http from "http";
import { Server } from "socket.io";

const port = 3000;
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index"); 
});

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Connected to the client:", socket.id);

  //  Listen for messages from the client
  socket.on("messageReceived", (data) => {
    console.log("Client message:", data);
    
    io.emit("sendMessage", data);
    // Broadcast received message to all clients
    setTimeout(() => {
      let autoreplay = "Hello!I am Srijon Chowdhury";
      console.log(autoreplay);
      io.emit("sendMessage", autoreplay);
    },1000);
   
  });
  //  Correctly handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(port, () => {
  console.log(`✅ Server is listening on port ${port}`);
});
console.log("🚀 Backend is starting...");



