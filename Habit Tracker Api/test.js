let time = new Date();

let todaydate = time.getDate();

console.log(todaydate);

let dayindex = time.getDay();
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
console.log(dayindex);

for (let i = 0; i < 7; i++) {
    let nowdate = todaydate +(i - dayindex);
    console.log(nowdate);
}