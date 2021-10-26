import pokemon from './data/pokemon.js';
import { capturePokemon, encounterPokemon } from './data/storage-utils.js';

const pokemon1Img = document.getElementById('pokemon-1-img');
const pokemon2Img = document.getElementById('pokemon-2-img');
const pokemon3Img = document.getElementById('pokemon-3-img');

const pokemon1Radio = document.getElementById('pokemon-1-radio');
const pokemon2Radio = document.getElementById('pokemon-2-radio');
const pokemon3Radio = document.getElementById('pokemon-3-radio');

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
    encounterPokemon(pokemon1.id);
    pokemon1Img.src = pokemon1.url_image;
    pokemon1Radio.value = pokemon1.id;

    let pokemon2 = pokemon[randNum2];
    encounterPokemon(pokemon2.id);
    pokemon2Img.src = pokemon2.url_image;
    pokemon2Radio.value = pokemon2.id;

    let pokemon3 = pokemon[randNum3];
    encounterPokemon(pokemon3.id);
    pokemon3Img.src = pokemon3.url_image;
    pokemon3Radio.value = pokemon3.id;
};

generatePokemon();

let totalPlays = 0;

button.addEventListener('click', ()=>{
    totalPlays++;

    const chosenRadio = 
    document.querySelector('input[type=radio]:checked');

    const chosenId = Number(chosenRadio.value);
    capturePokemon(chosenId);

    if (totalPlays <= 10) {
        generatePokemon();
    } else {
        window.location.href = './results/';
    }
});
