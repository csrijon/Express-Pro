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

async function gethabit() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please log in first to see your habits.");
      return;
    }

    const gethabitresponse = await fetch("/fetchhabit", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!gethabitresponse.ok) {
      const errorData = await gethabitresponse.json();
      console.error("Error fetching habits:", errorData);
      return;
    }

    const gethabitdata = await gethabitresponse.json();
    console.log("Fetched habits:", gethabitdata);

    const habitList = document.querySelector('.habit-list');
    if (!habitList) {
      console.error("habit-list not found in the DOM");
      return;
    }

    habitList.innerHTML = '';

    gethabitdata.forEach(habit => {
      const habitItem = document.createElement('li');
      habitItem.classList.add('habit-item');
      habitItem.innerHTML = `
        <div class="habit-text">
          <div class="habit-title">${habit.habitsname}</div>
          <div class="habit-sub">Usually completed at ${habit.habitday} ${habit.habittime}</div>
        </div>
        <button class="habit-btn ${habit.completed ? 'done' : ''}">
          <span class="material-icons">${habit.completed ? 'check_circle' : 'radio_button_unchecked'}</span>
        </button>
      `;
      habitList.appendChild(habitItem);
    });

  } catch (error) {
    console.error("Error fetching habit data:", error);
  }
}

gethabit();