function recipeGenerator(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: ["The recipe will be here"],
    autoStart: true,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", recipeGenerator);
