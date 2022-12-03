const inputChange = document.querySelector('input#font-size-control')
const abracadabra = document.querySelector('span#text')

const handleInput = () => {
    abracadabra.style.fontSize = `${inputChange.value}px`
};

inputChange.addEventListener("input", handleInput)
