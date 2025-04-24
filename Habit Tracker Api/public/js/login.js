const loginForm = document.getElementById('login');
const signupForm = document.getElementById('signup');
const buttons = document.querySelectorAll('.tab-buttons button');

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

let signup = document.querySelector("#signup");
signup.addEventListener("submit",async (e) => {
  const Name = document.querySelector(".Name").value;
  const Email = document.querySelector(".Email").value;
  const Password = document.querySelector(".Password").value;

  const response = fetch("/signup", {
    method : "POST",
    headers: {
         "Content-Type": "application/json"
    },
    body: JSON.stringify({Name, Email, Password})
  })
  const data = await response.json();
  console.log(data);
})


let login = document.querySelector("#login");
login.addEventListener("submit",() => {
    let Loginemail = document.querySelector(".Loginemail").value;
    let Loginpassword = document.querySelector(".Loginpassword").value;
  let loginresponse = fetch("/login", {
      method : "POST",
      headers :{
          "Content-Type": "application/json"
      },
      body: JSON.stringify({Loginemail, Loginpassword})})
  let logindata = loginresponse.json();
})