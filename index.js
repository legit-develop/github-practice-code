const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (e) => {
  const letter = btnEl.offsetLeft;
  const let_2 = btnEl.offsetTop;
  console.log(let_2);
  console.log(letter);
});
