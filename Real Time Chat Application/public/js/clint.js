console.log("Frontend is connected");
let socket = io("http://localhost:3000/?");

let messageInput = document.querySelector("#messageInput");
let sendButton = document.querySelector("#sendButton");
let messageArea = document.querySelector("#messageArea");

sendButton.addEventListener("click",() => {
    let message = messageInput.value;
    if (message.trim() === "") return;
    let chat = document.createElement("p")
    chat.innerText = `you: ${message}`;
    chat.style.color = "green";
    messageArea.appendChild(chat);
    socket.emit("send_message",message);
    messageInput.value = "";
})


socket.on("Receive_message",(message) => {
    let div = document.createElement("div");
    div.classList.add("show");
    div.textContent =`Friend:${message}` ;
    messageArea.appendChild(div);
})