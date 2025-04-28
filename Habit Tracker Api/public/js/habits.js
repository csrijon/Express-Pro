document.addEventListener('DOMContentLoaded', () => {
    let daysclick = document.querySelectorAll(".day");
    let reminderclick = document.querySelectorAll(".reminder");
    let selectday = "";
    let selectedreminder = "";
  
    // Select day logic
    daysclick.forEach(day => {
      day.addEventListener("click", () => {
        day.classList.toggle("active");
        selectday = day.textContent.trim();  // Ensure there's no extra whitespace
        console.log(selectday);
      });
    });
  
    // Select reminder logic
    reminderclick.forEach(reminder => {
      reminder.addEventListener("click", () => {
        reminder.classList.toggle("active");
        selectedreminder = reminder.textContent.trim();  // Trim whitespace
        console.log(selectedreminder);
      });
    });
  
    // Add habit button
    const addbtn = document.querySelector(".add-btn");
  
    addbtn.addEventListener("click", async () => {
      const habitname = document.querySelector("#habit-name").value.trim(); // Get habit name
      const periodday = selectday;
      const periodreminder = selectedreminder;
  
      // Check if all necessary data is provided
      if (!habitname || !periodday || !periodreminder) {
        alert("Please complete all fields!");
        return;
      }
  
      console.log(habitname, periodday, periodreminder);
  
      const habitdata = {
        habitsname: habitname,
        habitday: periodday,
        habittime: periodreminder
      };
  
      // Get token from localStorage
      const token = localStorage.getItem("token");
  
      if (!token) {
        alert("Please login first!");
        return;
      }
  
      try {
        // Send habit data to the backend
        const habitresponse = await fetch("/addhabit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // Add the token to the Authorization header
          },
          body: JSON.stringify(habitdata)
        });
  
        if (habitresponse.ok) {
          alert("Habit added successfully!");
        } else {
          const errorData = await habitresponse.json();
          alert(`Failed to add habit: ${errorData.error || 'Unknown error'}`);
        }
      } catch (error) {
        console.error("Error during habit creation:", error);
        alert("Failed to add habit. Please try again.");
      }
    });
  });
  