// Selecting elements
const loginForm = document.getElementById('login');
const signupForm = document.getElementById('signup');
const buttons = document.querySelectorAll('.tab-buttons button');

// Function to toggle between login and signup forms
function showForm(type) {
  if (type === 'login') {
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    buttons[0].classList.add('active');
    buttons[1].classList.remove('active');
  } else {
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    buttons[1].classList.add('active');
    buttons[0].classList.remove('active');
  }
}

// Signup form submission handling
let signup = document.querySelector("#signup");
signup.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent default form submission

  const Name = document.querySelector(".Name").value;
  const Email = document.querySelector(".Email").value;
  const Password = document.querySelector(".Password").value;

  try {
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Name, Email, Password })
    });

    const data = await response.json();

    if (response.ok) {
      // Redirect to login page after successful signup
      alert("Signup successful! Please log in.");
      showForm('login'); // Show the login form
    } else {
      alert("Signup failed: " + data.message);
    }
  } catch (error) {
    console.log("Error during signup:", error);
  }
});

// Login form submission handling
let login = document.querySelector("#login");
login.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent default form submission

  let Loginemail = document.querySelector(".Loginemail").value;
  let Loginpassword = document.querySelector(".Loginpassword").value;

  try {
    let loginresponse = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Loginemail, Loginpassword }),
    });

    if (loginresponse.ok) {
      const data = await loginresponse.json();
      const token = data.token; // Assuming the token is in the response

      // Store the token in localStorage
      localStorage.setItem("token", token);

      // Redirect to /index page after successful login
      window.location.href = "/index"; 
    } else {
      let logindata = await loginresponse.json();
      alert("Login failed: " + logindata.message);
      console.log("Login failed", logindata);
    }
  } catch (error) {
    console.log("Error during login:", error);
  }
});
