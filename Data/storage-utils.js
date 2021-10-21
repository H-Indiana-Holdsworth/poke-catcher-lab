// import pokemon from './pokemon.js';

export function findById(id, pokemon) {
    for (let pokes of pokemon) {
        if (pokes.id === id) {
            return pokes;
        }
    }
}

export function getPokedex(){

    const dexString = localStorage.getItem('POKEDEX') || '[]';

    const pokedex = JSON.parse(dexString);

    return pokedex;
}

export function encounterPokemon(id){
    const pokedex = getPokedex();
    const pokeItem = findById(id, pokedex);

    if (pokeItem) {
        pokeItem.encounter++;
    } else {
        const newItem = { id: id, encounter: 1, caught: 0 };
        pokedex.push(newItem);
    }

    const dexString = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', dexString);
}

export function capturePokemon(id){
    const pokedex = getPokedex();
    const pokeItem = findById(id, pokedex);

    if (pokeItem) {
        pokeItem.capture++;
    }

    const dexString = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', dexString);

}