export function filteredPokemonByName(name,pokemons){
    console.log(name,pokemons)

    let newPokemons = pokemons.filter(pokemon => pokemon.name.includes(name))

    return newPokemons
}