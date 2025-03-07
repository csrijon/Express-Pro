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

export { io };
Realtimechat(io);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index"); // Landing Page
});

// app.post("/submit", (req, res) => {
//     let name = req.body.name;
//     if (name) { 
//         res.redirect(`/chat?name=${encodeURIComponent(name)}`);
//     } else {
//         res.redirect("/"); // 🟢 Fix: Back to home page
//     }
// });

// app.get("/chat", (req, res) => {
//     let name = req.query.name;
//     if (!name) {
//         return res.redirect("/"); // Jodi name na thake, back kore land page e pathiye dibo
//     }
//     res.render("index", { name });
// });
