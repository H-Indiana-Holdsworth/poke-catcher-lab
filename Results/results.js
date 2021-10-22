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
    header.textContent = pokemonItem.pokemon;

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

const names = pokedex.map((poke)=>{
    const pokedex = findById(poke.id, pokemon);
    return pokedex.pokemon;
});

const capture = pokedex.map(pokemon=>pokemon.capture);
var ctx = document.getElementById('pokedexChart').getContext('2d');
//eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Captured',
            data: capture,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});