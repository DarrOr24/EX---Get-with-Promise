'use strict'

var gCachePokemons = loadFromStorage('pokemonsCache') 
var gCacheOnePokemon = loadFromStorage('pokemonCache')

function getPokemons() {
    if(gCachePokemons) return Promise.resolve(gCachePokemons)

    return axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
            gCachePokemons = res.data.results
            saveToStorage('pokemonsCache', gCachePokemons)
            return res.data.results
        })
}

function savePokemonCache(data) {
    gCachePokemons = data
    saveToStorage('pokemonsCache', gCachePokemons)
}

function saveOnePokemon(pokemon){
    gCacheOnePokemon.push(pokemon)
    saveToStorage('pokemonCache', gCacheOnePokemon)
}

function sortPokemonsList(pokemonsList){
    return pokemonsList.sort((pokemon1, pokemon2) => pokemon1.name.localeCompare(pokemon2.name) )
 
}

function getPoke(url){
    if(gCacheOnePokemon) return Promise.resolve(gCacheOnePokemon)

    return axios.get(url)
        .then(res => {
            gCacheOnePokemon = res.data
            saveToStorage('pokemonCache', gCacheOnePokemon)
            return res.data
        })
}

function getPokeCSV(){
    sortPokemonsList(gCachePokemons)
    var csvStr = `Name, Weight, Img1, Img2, Img3`
    gCachePokemons.forEach( pokemon => {
        const csvLine = `\n${pokemon.name}, ${pokemon.weight}, ${pokemon.imgs.back_default}, ${pokemon.imgs.back_shiny}, ${pokemon.imgs.front_default}`
        csvStr += csvLine
    })
    return csvStr
}

