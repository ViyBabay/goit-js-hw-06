const input = document.querySelector('#validation-input');

input.addEventListener("blur", (evt) => {
    console.log(evt.target.value.length);
    const length = Number(evt.target.dataset.length);
    console.log(typeof length);
    if (evt.target.value.length === length) {
        evt.target.classList.add('valid');
        evt.target.classList.remove('invalid');
    }
    if (evt.target.value.length !== length) {
        evt.target.classList.add('invalid');
        evt.target.classList.remove('valid');
    }
})