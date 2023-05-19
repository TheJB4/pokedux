/* eslint-disable react/prop-types */
// import React from 'react'

import PokemonCard from '../PokemonCard.jsx'
import PokeBall from '../PokeBall'

let loadingSkeleton = ['','','','','','','','','','','','','','','','','','','','','','','']

const PokemonList = ({pokemons,loading}) => {
  return (
    <div className='grid grid-cols-4 gap-4 mt-3'>
        {loading 
          ?loadingSkeleton.map(pokemons => (
            <div className='w-50 p-5 border border-black rounded-sm flex flex-col justify-center items-center relative' key={pokemons.id}>
              <PokeBall /> 
            </div>
          ))
          :pokemons.map(pokemon => (
            <>
              {console.log(pokemon.types)}
              <PokemonCard 
                key={pokemon.id} 
                name={pokemon.name} 
                description={pokemon.description} 
                image={pokemon.image} 
                pokemonId={pokemon.id} 
                isFavorite={pokemon.isFavorite}
                />
            </>
        ))}
    </div>
  )
}

PokemonList.defaultProps={
    pokemons: Array(10).fill('')
}

export default PokemonList