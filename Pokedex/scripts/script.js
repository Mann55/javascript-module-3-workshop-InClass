//https://pokeapi.co/api/v2/berry
//https://pokeapi.co/api/v2/pokemon

// Getting div from html and creating input search field
const getDiv = document.querySelector("#root");
const inputField = document.createElement("input");
getDiv.appendChild(inputField);

// Creating button
const btn = document.createElement("button");
btn.innerHTML = "Search Pokemon";
getDiv.appendChild(btn);

// Adding click event listener for button
btn.addEventListener("click", getPokemon);
function getPokemon() {
  //console.log("hiii");
  const url = "https://pokeapi.co/api/v2/pokemon";
  fetch(url)
    .then((pokemon) => pokemon.json())
    .then((pokemonObject) => {
      console.log(pokemonObject.results);
      displayPokemon(pokemonObject); // display data means render pokemon
    });
}

// Here we are rendering the pokemons with normal function
/* 
function displayPokemon(pokemonObject) {
  pokemonObject.results.forEach((pokemon) => {
    console.log(pokemon.name);
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const result = ul.appendChild(li);
    result.innerHTML = pokemon.name;
    getDiv.appendChild(result);
  });
}
*/

// Here we are rendering the pokemons with arrow function
const displayPokemon = (pokemonObject) => {
  pokemonObject.results.forEach((pokemon) => {
    if (inputField.value.length != 0 && inputField.value === pokemon.name) {
      //console.log("hiii");
      const divEle = document.createElement("div");
      getDiv.appendChild(divEle);
      divEle.innerHTML = inputField.value;
    } else if (inputField.value.length === 0) {
      console.log(pokemon.name);
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      const result = ul.appendChild(li);
      result.innerHTML = pokemon.name;
      getDiv.appendChild(result);
    }
  });
};
