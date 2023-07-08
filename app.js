const colors = ["green", "red", "blue", "black", "white"];

const color = document.querySelector('.color');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    let colorx = randomColor();
    document.body.style.backgroundColor = colors[colorx];
    color.textContent = colors[colorx];
})

function randomColor() {
    return Math.floor(Math.random() * colors.length)
}