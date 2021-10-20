# Pokéman Plan

## File layout
* Home page (root directory)
    * index.hmtl
    * app.js
* Results page (/results directory)
    * index.html
    * results.js
* Data folder
    * storage-utils.js-- holds localstorage fxns
    * fruit.js -- holds the data

## HTML Elements
* Home page with
    * 3 images as radio buttons displayed side by side
    * button with id of select-pokemon
* Empty results page

## localStorage fxns
```javascript
const results = [
    { id: 'poke1', shown: 2, picked: 2 },
    { id: 'poke2', shown: 2, picked: 1 },
    { id: 'poke3', shown: 2, picked: 1 }
]
```
* getPokedex -- return the results array or empty array
* capturePokemon -- increment the captured key for a pokemon
* encounterPokemon -- increment the encountered key for a pokemon

## app.js logic
* make fxn called generatePokemon()
    * generate 3 random pokemon
    * call encounterPokemon for each
    * render the pokemon on the page

## On page load
* set totalPlays to 0
* call generatePokemon()

## On button click
* increment total plays
* call capturePokemon with chosen pokemon 
* if total plays >= 10
    * redirect to results
* else
    * call generatePokemon()