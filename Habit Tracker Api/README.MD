# Habit Tracker App 🧠

This is a **Node.js and Express-based Habit Tracker Web Application** that allows users to **sign up**, **log in**, and **track their daily habits** securely using **JWT (JSON Web Tokens)** for authentication.

## 🔐 Features

- ✅ **User Registration & Login** using JWT for secure session management.
- 📋 **Add Daily Habits** (e.g., Workout, Study, Read).
- 📅 **View All Added Habits** with date-wise tracking.
- 🌐 **Frontend-Backend Integrated** with REST APIs.
- ☁️ **MongoDB** used for storing user data and habits.

## 🗂️ Project Structure


## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JS (with EJS templating)
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT (JSON Web Token)

## 🚀 How to Run

1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd <project-folder>

2. Install dependencies:
   npm install
3. Start The Server
   nodemon index.js 

.
├── models/
│   └── schema.js           # Mongoose schema for users and habits
│
├── public/
│   ├── css/                # Stylesheets
│   │   ├── habiit.css
│   │   ├── login.css
│   │   └── style.css
│   │
│   └── js/                 # Frontend JavaScript
│       ├── habits.js
│       ├── login.js
│       └── script.js
│
├── routes/
│   ├── habit.js            # Routes related to habit operations
│   └── login.js            # Routes for login and signup
│
├── views/                 
│   ├── habit.ejs           # Habit page UI
│   ├── index.ejs           # Home page UI
│   └── signup.ejs          # Signup page UI
│
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── index.js                # Main server file
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Exact dependency versions
└── README.md               # You're here!
