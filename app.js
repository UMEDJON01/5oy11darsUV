const url = "http://localhost:3000/recipies";
const template = document.querySelector("template");
const ul = document.querySelector(`ul`);

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((recepies) => {
    updateUI(recepies);
  })
  .catch((error) => {
    console.log(error);
  });

function updateUI(recepies) {
  recepies.forEach((recipe) => {
    const clone = template.content.cloneNode(true);

    const image = clone.querySelector("img");
    const h3 = clone.querySelector("h3");
    const p = clone.querySelector("p");
    const li = clone.querySelector("li");

    image.src = recipe.imageUrl;
    image.width = 450;

    console.log(image);

    h3.textContent = recipe.title;
    p.textContent = recipe.cookingTime;
    li.textContent = recipe.ingredients;

    ul.appendChild(clone);
  });
}
