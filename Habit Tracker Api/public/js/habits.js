let daysclick = document.querySelectorAll(".day");
let reminderclick = document.querySelectorAll(".reminder");
let selectday = "";
daysclick.forEach(day => {
    day.addEventListener("click", () => {
        day.classList.toggle("active");
        selectday = day.textContent;
        console.log(selectday);
    })
});
let selectedreminder = "";
reminderclick.forEach(reminder => {
    reminder.addEventListener("click", () => {
        reminder.classList.toggle("active");
        selectedreminder = reminder.textContent;
        console.log(selectedreminder);
    })
});

let addbtn = document.querySelector(".add-btn"); 
addbtn.addEventListener("click",() => {
    let habitname = document.querySelector("#habit-name").value;
    let periodday = selectday;
    let periodreminder = selectedreminder;
    console.log(habitname,periodday,periodreminder);

    const habitdata = {
        habitsname: habitname,
        habitday : periodday,
        habittime : periodreminder
    }
    let habitresponse = fetch("/addhabit", {
        method : "POST",
        headers: {
             "Content-Type": "application/json"
        }
        ,body: JSON.stringify(habitdata)
    })
});

 async function gethabit() {
    const gethabitresponse = await fetch("/fetchhabit")
    const gethabitdata = await gethabitresponse.json();
    console.log(gethabitdata);
}

gethabit();