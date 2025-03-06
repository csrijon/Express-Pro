import {io} from "./index.js"

  export default function Realtimechat(io) {
    io.on("connection",(socket) => {
      console.log("connection successful",socket.id);

      socket.on("send_message",(message) => {
        console.log("message process successful",message)

        socket.broadcast.emit("Receive_message",message);
      })
    })
    
}