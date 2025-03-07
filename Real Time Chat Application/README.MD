# Real-Time Chat Application

## Overview
This is a real-time chat application where users can enter their name and start chatting with anyone connected to the server. No additional setup is required from the user's side—just enter a name and start messaging.

## Features
- Simple name-based login for chat access
- Real-time messaging using **Socket.io**
- No authentication required
- Messages update instantly for all connected users

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, Socket.io
- **Template Engine:** EJS

## Project Structure
```
REAL TIME CHAT
│── node_modules/        # Installed dependencies
│── public/              # Static files
│   ├── css/             # Stylesheets
│   │   ├── style.css
│   ├── js/              # Client-side scripts
│   │   ├── client.js    # Handles socket connections & messaging
│   │   ├── submit.js    # Handles name submission
│── views/               # EJS templates
│   ├── index.ejs        # Chat page
│── .gitignore           # Ignored files for Git
│── connect.js           # Socket.io setup file
│── index.js             # Main server file
│── package.json         # Project dependencies
│── package-lock.json    # Auto-generated dependency lock file
│── README.md            # Project documentation
```

## Installation & Setup
### 1. Clone the repository:
```sh
git clone https://github.com/yourusername/realtime-chat.git
```

### 2. Navigate to the project folder:
```sh
cd realtime-chat
```

### 3. Install dependencies:
```sh
npm install
```

### 4. Start the server:
```sh
npm start
```

### 5. Open the application in a browser:
```
http://localhost:3000/
```

## Usage
1. Open the chat page.
2. Enter your name.
3. Start chatting with anyone connected to the server!

## License
This project is open-source. Feel free to modify and enhance it!

