function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function recipeGenerator(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "90ta40de2b3f7bocf6acde793ab3484a";
  let prompt = `User instructions:Generate a recipe about ${instructionsInput.value}`;
  let context =
    "You are a baking recipes expert and love to write easy baking recipes.Your mission is to generate a simple recipe, using metrics unit, in basic HTML and seperate each line with a <br/>.Make sure to follow the user instructions.Sign the recipe with `From AI baking recipes`inside a <strong></strong> element at the end of the recipe.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `🧁 Generating the ${instructionsInput.value} recipe, please wait ... 🧁`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", recipeGenerator);
