// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import pokemon from '../data/pokemon.js';
import pokemon from '../data/pokemon.js';
import { getPokedex, setPokedex, findById } from '../data/storage-utils.js';

const test = QUnit.test;

// skip('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });
test('findById should return the pokemon matching the ID', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, pokemon);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


test('getPokedex should return the pokedex if it exists', (expect)=>{
    //arrange
    const fakeDex = [
        { 'id': 1, 'pokemon': 'bulbasaur', encountered: 0, captured: 0 }
    ];
    localStorage.setItem('POKEDEX', JSON.stringify(fakeDex));
    //act
    const pokedex = getPokedex();
    //assert
    expect.deepEqual(pokedex, fakeDex);
});

test('setPokedex should increment the quantity of the item in the id', (expect)=>{
    localStorage.removeItem('POKEDEX');
    // arrange
    const fakeDex = [
        { 'id': 1, encounter: 1, caught: 0 },
        { 'id': 2, encounter: 1, caught: 0 }
    ];
    localStorage.setItem('POKEDEX', JSON.stringify(fakeDex));
    // act
    setPokedex(1);
    const pokedex = getPokedex();
    const expected = [
        { 'id': 1, encounter: 2, caught: 0 },
        { 'id': 2, encounter: 1, caught: 0 }
    ];
    // assert
    expect.deepEqual(pokedex, expected);
});