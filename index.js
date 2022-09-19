const kits = ["crash", "bass", "tom", "snare"];
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.innerText = kit;
  btnEl.classList.add("btn");
  containerEl.appendChild(btnEl);
});
