const box = document.getElementById('box');

const x = parseInt(prompt('Podaj liczbę X'));
const y = parseInt(prompt('Podaj liczbę Y'));

let xSize = 100/x;
let ySize = 100/y;

let itemsNumber = x*y;

for (let i = 1; i<=itemsNumber; i++) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const el = document.createElement('div');

    el.classList.add('box__item');
    el.style.width = `${xSize}%`;
    el.style.height = `${ySize}%`;
    el.style.backgroundColor = `#${randomColor}`;

    box.appendChild(el);
}