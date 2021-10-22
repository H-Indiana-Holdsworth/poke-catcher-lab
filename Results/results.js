import pokemon from '../data/pokemon.js';
import { getPokedex, findById } from '../data/storage-utils.js';

const pokedex = getPokedex();

const main = document.getElementById('main');

const homepage = document.getElementById('homepage');

for (let poke of pokedex){
    const pokemonItem = findById(poke.id, pokemon);

    const div = document.createElement('div');

    const img = document.createElement('img');
    img.src = pokemonItem.url_image;

    const header = document.createElement('header');
    header.textContent = pokemonItem.name;

    const encounterDisplay = document.createElement('span');
    encounterDisplay.textContent = `Encountered: ${poke.encounter} `;

    const captureDisplay = document.createElement('span');
    captureDisplay.textContent = `Captured: ${poke.capture}`;

    div.append(img, header, encounterDisplay, captureDisplay);

    main.append(div);
    
}

homepage.addEventListener('click', () => {
    localStorage.removeItem('POKEDEX');
});