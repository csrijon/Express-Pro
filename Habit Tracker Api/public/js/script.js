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
    // Fetch habit data from the backend
    const gethabitresponse = await fetch("/fetchhabit");
    const gethabitdata = await gethabitresponse.json();
    console.log(gethabitdata);

    // Get the habit list container using class selector
    const habitList = document.querySelector('.habit-list');
    
    // Log habitList to check if it's found
    console.log(habitList);

    // If the element is not found, exit the function
    if (!habitList) {
      console.error("habit-list not found in the DOM");
      return;
    }

    // Clear the list before adding new habits
    habitList.innerHTML = '';

    // Loop through each habit and display it
    gethabitdata.forEach(habit => {
      // Create a new list item for each habit
      const habitItem = document.createElement('li');
      habitItem.classList.add('habit-item');

      // Set the inner HTML for each habit
      habitItem.innerHTML = `
        <div class="habit-text">
          <div class="habit-title">${habit.habitsname}</div>
          <div class="habit-sub">Usually completed at ${habit.habitday} ${habit.habittime}</div>
        </div>
        <button class="habit-btn ${habit.completed ? 'done' : ''}">
          <span class="material-icons">${habit.completed ? 'check_circle' : 'radio_button_unchecked'}</span>
        </button>
      `;

      // Append the habit item to the habit list
      habitList.appendChild(habitItem);
    });
  } catch (error) {
    console.error("Error fetching habit data:", error);
  }
}

// Call the function to fetch and display the habits
document.addEventListener('DOMContentLoaded', () => {
  gethabit();  // Calls the function when DOM is fully loaded
});
