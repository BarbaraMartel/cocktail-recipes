const fetchCocktail = () => {
  const drinkNameInput = document.getElementById("drinkName");
  let drinkName = drinkNameInput.value;

  if(drinkName == ""){
    drinkName = "null";
  }
    drinkName = drinkName.toLowerCase();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;

  fetch(url).then((res) => {
    if (res.status != "200") {
      console.log(res);
    }
    else {
      return res.json();
    }
  }).then((data) => {
    if (data) {
      console.log(data);

      let myDrinkName = data.drinks[0].strDrink;

      let drinkImg = data.drinks[0].strDrinkThumb;
      
      let drinkIngre = [data.drinks[0].strIngredient1, data.drinks[0].strIngredient2,
      data.drinks[0].strIngredient3, data.drinks[0].strIngredient4,
      data.drinks[0].strIngredient5, data.drinks[0].strIngredient6];

      let drinkReci = data.drinks[0].strInstructions;

      drinkImage(drinkImg);
      drinkRecipe(drinkReci);
      drinkIngredients(drinkIngre);
      drinkCocktailName(myDrinkName);

    }
  }).catch((error) => {
    console.log("Error: " + error);
    alert("Debe ingresar un nombre válido.");
  });
}

const drinkImage = (url) => {
  const drinkPhoto = document.getElementById("drinkImg");
  drinkPhoto.src = url;
}

const drinkRecipe = (text) => {
  const drinkRecipeInput = document.getElementById("drinkRecipe");
  drinkRecipeInput.textContent = text;
}

const drinkIngredients = (list) => {
  const ingredientsDiv = document.getElementById("ulIngre");
  ingredientsDiv.innerHTML = "";
  let ingre = "";

  list.forEach(item => {
    if (item != null) {
      ingre = ingredientsDiv.appendChild(document.createElement('li'));
      ingre.textContent = item;
    }
  })
}

const drinkCocktailName = (textName) => {
  const cocktailName = document.getElementById("cocktail-name");
  cocktailName.innerHTML = textName;
}
