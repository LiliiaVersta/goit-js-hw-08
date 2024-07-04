let widthHeight = 30;

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls [data-create]');
const destroyBtn = document.querySelector('#controls [data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = amount => {
  const collection = document.createElement('div');
  collection.classList.add('collection');

  for (let i = 0; i <= amount; i++) {
    const color = getRandomHexColor();

    collection.insertAdjacentHTML(
      'beforeend',
      `<div style="width:${widthHeight}px; height:${widthHeight}px; background-color:${color}"></div>`
    );

    widthHeight += 10;
  }
  boxes.prepend(collection);
};

const handleCreateClick = () => {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
    input.value = '';
  }
};

const handleResetClick = () => {
  boxes.innerHTML = '';
};

createBtn.addEventListener('click', handleCreateClick);
destroyBtn.addEventListener('click', handleResetClick);
