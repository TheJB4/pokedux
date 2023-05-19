/* eslint-disable react/prop-types */
// import { useState } from 'react'

/*Connection to redux*/ 
import { useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"

import PokemonList from "./components/PokemonList.jsx/index.jsx"
import Searcher from "./components/Searcher/Searcher"

import { addImageToPokemons,setSearchNamePokemon,filteredPokemonSearch } from "./slices/dataSlice.js"
import { setLoading } from "./slices/uiSlice.js"
import { filteredPokemonByName } from "./utilities/filteredPokemonByName.js"

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  let pokemons = useSelector(state => state.data.pokemons)
  let loading = useSelector(state => state.ui.loading)
  let nameSearchedPokemon = useSelector(state => state.data.searchedPokemon)
  let dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(setLoading(true))
    setTimeout(()=>{
      if(!nameSearchedPokemon)dispatch(addImageToPokemons())
      if(nameSearchedPokemon)dispatch(addImageToPokemons(filteredPokemonByName(nameSearchedPokemon,pokemons)))
    },
    20)
  },[nameSearchedPokemon])

  return (
    <div className='flex justify-center items-center flex-col w-full h-full '>
      <Searcher onSetName={setSearchNamePokemon}/>
      <PokemonList pokemons={pokemons} loading={loading}/>
    </div>
  )
}

export default App
