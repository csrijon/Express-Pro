document.addEventListener("DOMContentLoaded", () => {
    const fabicon = document.querySelector(".fab");
    console.log(fabicon);
  
    if (fabicon) {
      fabicon.addEventListener("click", () => {
        window.location.href = "/habit";  
      });
    } else {
      console.log("fabicon element not found!");
    }
  });
let date = new Date();
let todaydate = document.querySelector(".today-date");
let month = date.getMonth();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
todaydate.textContent = months[month] + " " + date.getDate();

let dayindex = date.getDay();
let days = ["M", "T", "W", "T", "F", "S","S"];
let nowdate = date.getDate();

for (let i = 0; i < 7; i++) {
  let nowdatedays = nowdate + (i - dayindex);
  let dayname= document.querySelectorAll(".day-name");
  let daynum= document.querySelectorAll(".day-num");
  dayname[i].textContent = days[i];
  daynum[i].textContent = nowdatedays;
}