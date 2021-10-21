export function getPokedex(){

    const dexString = localStorage.getItem('POKEDEX') || '[]';

    const pokedex = JSON.parse(dexString);

    return pokedex;
}