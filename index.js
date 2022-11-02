//getting month index - starting from index 0 from January
const monthInx = new Date().getMonth();

//get month element
const monthEl = document.querySelector(".date h1");

//get full date element
const fullDateEl = document.querySelector(".date p");

//get last day of the month
const lastDay = new Date(new Date().getFullYear(), monthInx + 1);
