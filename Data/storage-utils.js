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

export function setPokedex(id){
    const pokedex = getPokedex();
    const pokeItem = findById(id, pokedex);
    if (pokeItem) {
        pokeItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        pokedex.push(newItem);
    }
    const dexString = JSON.stringify(pokedex);
    localStorage.setItem('POKEDEX', dexString);
}