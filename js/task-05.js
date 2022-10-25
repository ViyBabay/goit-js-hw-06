const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputEntryData);
function onInputEntryData(evt) {
    if (evt.target.value === "") {
      output.textContent = "Anonymous";
  }
    else  output.textContent = evt.currentTarget.value;
}