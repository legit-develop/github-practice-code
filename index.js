//getting month index - starting from index 0 from January
const monthInx = new Date().getMonth();

//get month element
const monthEl = document.querySelector(".date h1");

//get full date element
const fullDateEl = document.querySelector(".date p");

//get last day of the month
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();

//get Days Element
const daysEl = document.querySelector(".days");

//get first days
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;

//Months Array
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(months[monthInx]);

//Dynamicall insert current month
monthEl.innerText = months[monthInx];

//Dynamically insert date
fullDateEl.innerText = new Date().toDateString();
