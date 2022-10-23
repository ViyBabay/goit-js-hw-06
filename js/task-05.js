// const refs = {
//     input: document.querySelector('#name-input'),
//     nameLabel: document.querySelector('#name-output'),
// }

// refs.input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     refs.nameLabel.textContent = event.currentTarget.value
// }

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputEntryData);
function onInputEntryData(evt) {
  output.textContent = evt.currentTarget.value;
    if (evt.target.value === "") {
      output.textContent = "Anonymous";
    }
}