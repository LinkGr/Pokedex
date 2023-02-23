const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon__image");

// O Bendito comando que troca o bg do tipo do pokemon ->
const pokemonType0 = document.querySelector(".pokemon__type0");
const pokemonType1 = document.querySelector(".pokemon__type1");

const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

// Toda a parte de Funcionamento ta aqui ->

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  // Cria outra function com o const  ->
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  if (APIResponse.status == 200) {
    const data = await APIResponse.json();
    return data;
  }
};

const renderPokemon = async (pokemon) => {
  // Coloca o loading no lugar do nome até o servidor responder e aparecer o nome ->
  pokemonName.innerHTML = "Loading...";
  pokemonNumber.innerHTML = "";

  const data = await fetchPokemon(pokemon);

  if (data) {
    searchPokemon = data.id;

    pokemonImage.style.display = "block";

    // Id - Nome do Pokemon ->
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;

    // Imagem do Pokemon ->
    pokemonImage.src =
      data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ];

    input.value = "";

    // Tipo do pokemon ->
    // O Bendito comando que troca o bg do tipo do pokemon ->

    bdAct = ["0.33vmin solid #333"];

    // Fazendo switch case para mudar o background color do tipo0 e dps do tipo1 ->

    pokemonType0.innerHTML = data["types"]["0"]["type"]["name"];
    
    pokemonType0.style.color = "#f0f0f0";

    switch (pokemonType0.innerHTML) {
      case "grass":
        bgtype0 = ["#227736"];
        break;
      case "fire":
        bgtype0 = ["#b41625"];
        break;
      case "water":
        bgtype0 = ["#0260dc"];
        break;
      case "bug":
        bgtype0 = ["#154925"];
        break;
      case "flying":
        bgtype0 = ["#44627a"];
        break;
      case "ground":
        bgtype0 = ["#a66928"];
        break;
      case "normal":
        bgtype0 = ["#c197a3"];
        break;
      case "poison":
        bgtype0 = ["#5d2a8f"];
        break;
      case "rock":
        bgtype0 = ["#4e1d0c"];
        break;
      case "steel":
        bgtype0 = ["#537d6f"];
        break;
        a4224e;
      case "fairy":
        bgtype0 = ["#a4224e"];
        break;
      case "ice":
        bgtype0 = ["#8acce2"];
        break;
      case "fighting":
        bgtype0 = ["#8c3f23"];
        break;
      case "ghost":
        bgtype0 = ["#312766"];
        break;
      case "psychic":
        bgtype0 = ["#9b3171"];
        break;
      case "dark":
        bgtype0 = ["#040605"];
        break;
      case "electric":
        bgtype0 = ["#f0fd31"];
        pokemonType0.style.color = "#444" ;
        break;
      case "dragon":
        bgtype0 = ["#3c8aa1"];
        break;
    }

    pokemonType0.style.backgroundColor = bgtype0;
    pokemonType0.style.border = bdAct;

    if (data["types"]["1"]) {
      pokemonType1.innerHTML = data["types"]["1"]["type"]["name"];

      switch (pokemonType1.innerHTML) {
        case "grass":
          bgtype1 = ["#227736"];
          break;
        case "fire":
          bgtype1 = ["#b41625"];
          break;
        case "water":
          bgtype1 = ["#0260dc"];
          break;
        case "bug":
          bgtype1 = ["#154925"];
          break;
        case "flying":
          bgtype1 = ["#44627a"];
          break;
        case "ground":
          bgtype1 = ["#a66928"];
          break;
        case "normal":
          bgtype1 = ["#c197a3"];
          break;
        case "poison":
          bgtype1 = ["#5d2a8f"];
          break;
        case "rock":
          bgtype1 = ["#4e1d0c"];
          break;
        case "steel":
          bgtype1 = ["#537d6f"];
          break;
        case "fairy":
          bgtype1 = ["#a4224e"];
          break;
        case "ice":
          bgtype1 = ["#8acce2"];
          break;
        case "fighting":
          bgtype1 = ["#8c3f23"];
          break;
        case "ghost":
          bgtype1 = ["#312766"];
          break;
        case "psychic":
          bgtype1 = ["#9b3171"];
          break;
        case "dark":
          bgtype1 = ["#040605"];
          break;
        case "electric":
          bgtype1 = ["#f0fd31"];
          pokemonType0.style.color = "#444" ;
          break;
        case "dragon":
          bgtype1 = ["#3c8aa1"];
          break;
      }

      pokemonType1.style.backgroundColor = bgtype1;
      pokemonType1.style.border = bdAct;
    } else {
      pokemonType1.innerHTML = "";
      pokemonType1.style.border = "";
      pokemonType1.style.backgroundColor = "";
    }
  } else {
    // Caso o id ou nome fornecido não existir, ele tira a imagem, o id, e troca o nome pra Not Found ->
    pokemonName.innerHTML = "Not found :(";
    pokemonNumber.innerHTML = "";
    pokemonImage.style.display = "none";
    pokemonType1.innerHTML = "";
    pokemonType0.innerHTML = "";

    pokemonType0.style.border = "";
    pokemonType0.style.backgroundColor = "";

    pokemonType1.style.border = "";
    pokemonType1.style.backgroundColor = "";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  renderPokemon(input.value.toLowerCase());
});

buttonNext.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

buttonPrev.addEventListener("click", () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

renderPokemon(searchPokemon);
