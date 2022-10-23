const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');;
const elValue = document.querySelector('#value');

decrementBtn.addEventListener("click", () => {
    counterValue.decrement();
    elValue.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", () => {
    counterValue.increment();
    elValue.textContent = counterValue.value;
});