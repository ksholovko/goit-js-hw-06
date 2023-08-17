const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const createIngredients = ingredients.map((ingredient, index) => {
  const createIngredient = document.createElement('li');
  createIngredient.classList.add('item');
  createIngredient.textContent = ingredients[index];
 
  return createIngredient;
});

console.log(createIngredients);

ingredientsList.append(...createIngredients);