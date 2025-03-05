console.log("bal")
let receiver = document.querySelector("#receiver");
let sender = document.querySelector("#sender");
let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
const socket = io();

btn.addEventListener("click",() => {
    let mess = input.value;
    if (mess.trim()!=="") {
        socket.emit("messageReceived", mess);
    }
    input.value = "";
})

socket.on("sendMessage", (data) => {
    let message = document.createElement("div");
    message.classList.add("message");
    message.classList.add("sent");
    message.textContent = data;
    sender.appendChild(message);
    receiver.scrollTop = receiver.scrollHeight;
})
