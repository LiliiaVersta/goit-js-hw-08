const categories = document.querySelectorAll('#categories .item'); //мы обрщаемся и будем искать с помощью(document.querySelector) id через # и через точку классу.
const categoriesLength = categories.length;

console.log(`Number of categories: ${categoriesLength}`); // выводим в констолько количество категрий

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsLength = category.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsLength}`);
});
