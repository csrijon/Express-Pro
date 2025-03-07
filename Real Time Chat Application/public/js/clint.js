document.addEventListener("DOMContentLoaded", () => {
    let socket = io("http://localhost:3000/?");

    let messageInput = document.querySelector("#messageInput");
    let sendButton = document.querySelector("#sendButton");
    let messageArea = document.querySelector("#messageArea");

    sendButton.addEventListener("click", () => {
        let message = messageInput.value.trim();
        if (message === "") return;

        let chats = document.createElement("div");
        chats.classList.add("chat");
        chats.innerText = `You: ${message}`;
        messageArea.appendChild(chats);

        socket.emit("send_message", message);
        messageInput.value = "";
    });

    socket.on("Receive_message", (message) => {
        let div = document.createElement("div");
        div.classList.add("bubble");
        div.textContent = `Friend: ${message}`;
        messageArea.appendChild(div);
    });

});
