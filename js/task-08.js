const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const formElements = evt.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData =  { email, password };


  if (email === "" || password === "") {
    return alert("ALERT! Please fill in all the fields!");
  }

  console.log(formData);
  evt.currentTarget.reset();
}
 