const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList = 'item';
  return li;
})
 
console.log(list);

const ulRef = document.querySelector('#ingredients');
ulRef.append(...list);