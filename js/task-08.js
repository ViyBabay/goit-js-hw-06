const form = document.querySelector('.login-form');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    console.log(formData);

    if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
    }
    evt.currentTarget.reset();
})
