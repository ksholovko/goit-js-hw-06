
const inputNumber = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', () => {
  createBoxes(inputNumber.value);
});

destroyBtn.addEventListener('click', () => {
  while (boxes.firstChild) {
    boxes.firstChild.remove();
  }
});


function createBoxes(amount) {
   
  let previousSize = 20;
  let newSize;


  for (let i = 0; i < amount; i++) {
  
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    newSize = previousSize + 10;
    div.style.height = newSize + 'px';
    div.style.width = newSize + 'px';
    previousSize = newSize;
     
    boxes.appendChild(div);
  }

};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
