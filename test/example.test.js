// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import pokemon from '../data/pokemon.js';
import { getPokedex } from '../data/storage-utils.js';

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
