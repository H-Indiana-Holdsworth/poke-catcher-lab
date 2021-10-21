import pokemon from './data/pokemon.js';

const pokemon1Img = document.getElementById('pokemon-1-img');
const pokemon2Img = document.getElementById('pokemon-2-img');
const pokemon3Img = document.getElementById('pokemon-3-img');
const button = document.getElementById('select-pokemon');

const generatePokemon = () =>{
  // generate 3 random pokemon
    // generate 3 random indices of the pokemon array
    let randNum1 = Math.floor(Math.random() * pokemon.length);
    let randNum2 = Math.floor(Math.random() * pokemon.length);
    let randNum3 = Math.floor(Math.random() * pokemon.length);

    // regenerate if any of them match
    while (
        randNum1 === randNum2 ||
      randNum1 === randNum3 ||
      randNum2 === randNum3 
    ) {
        randNum1 = Math.floor(Math.random() * pokemon.length);
        randNum2 = Math.floor(Math.random() * pokemon.length);
        randNum3 = Math.floor(Math.random() * pokemon.length);
    }

    // call encounterPokemon for each

    // render pokemon on the page
    let pokemon1 = pokemon[randNum1];
    pokemon1Img.src = pokemon1.url_image;

    let pokemon2 = pokemon[randNum2];
    pokemon2Img.src = pokemon2.url_image;

    let pokemon3 = pokemon[randNum3];
    pokemon3Img.src = pokemon3.url_image;
};
generatePokemon();

let totalPlays = 0;

button.addEventListener('click', ()=>{
    totalPlays++;

    if (totalPlays <= 10) {
        generatePokemon();
    } else {
        window.location.href = './results/';
    }
});
