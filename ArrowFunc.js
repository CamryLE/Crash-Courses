function isPositive(number) {
    return number >= 0
}

let isPositive = number => number >= 0

function randomNumber () {
    return Math.random
}

let randomNumber2 = () => Math.random

document.addEventListener('click', function () {
    console.log('Click')
})

document.addEventListener('click', () => console.log('Click'))

