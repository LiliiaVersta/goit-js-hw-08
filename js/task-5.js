function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.querySelector('body');
const divWidget = document.querySelector('.widget');

const changeColor = () => {
  const newColor = getRandomHexColor();
  colorSpan.textContent = newColor;
  body.style.backgroundColor = newColor;
};
changeColorBtn.addEventListener('click', changeColor);
