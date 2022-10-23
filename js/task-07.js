const inputRef = document.querySelector('#font-size-control');
console.log(inputRef);

const textRef = document.querySelector('#text');
console.log(textRef);

inputRef.addEventListener('input', (evt) => {
    console.log.apply(evt.target.value);
    textRef.style.fontSize = evt.target.value + 'px';
});