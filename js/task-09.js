
const changeColorBtn = document.querySelector('button.change-color');
const colorHex = document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', getBackgroundColor);

function getBackgroundColor() {

  body.style.backgroundColor = getRandomHexColor();
  colorHex.textContent = getRandomHexColor();

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
