const categories = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categories.length}`);

const categoriesList = document.querySelector("ul#categories");

categoriesList.querySelectorAll("li.item").forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryItemCount = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemCount}`);
});