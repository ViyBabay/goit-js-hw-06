const body = document.querySelector("body");
const colorVal = document.querySelector("span.color");
const btn = document.querySelector("button.change-color");


btn.addEventListener("click", (evt) => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorVal.textContent = color;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
