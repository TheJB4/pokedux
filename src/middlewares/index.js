// import { getImagePokemon } from "../utilities/getImagePokemon";

import { setPokemons, setSearchNamePokemon } from "../slices/dataSlice";



export const logger = (store) => (next) => (action) => {
      // Código del middleware
  // Aquí se realiza la lógica del middleware
  
  // Acciones antes de llegar al reducer
  // console.log('Middleware: Acción interceptada', action);
  
  // Ejecutar la siguiente función en la cadena
  const result = next(action);
  
  // Acciones después de llegar al reducer
  // console.log('Middleware: Nuevo estado', store.getState());
  
  // Devolver el resultado de la siguiente función
  return result;
}

export const filteredPokemons = (store) => (next) => (action) =>{
   // Acciones antes de llegar al reducer
    let data = store.getState().data
    let inputValue = data.searchedPokemon

    // if(action.type === "data/setSearchNamePokemon"){
    //     let newPokemons = data.pokemons.filter(pokemon => {
    //      if(pokemon.name.includes(inputValue)){
    //       return pokemon
    //      }
    //     })
    //     // console.log(newPokemons,'Pokemons antes de llegar al reducer')

    //   if(inputValue)store.dispatch(setPokemons(newPokemons))

    //   console.log(newPokemons,'Los pokemons encontrados')

  //   console.log(console.log(action.payload),'Antes de mostrar los pokemons')

  //  // Acciones después de llegar al reducer
   let result = next(action)
  //  console.log(inputValue,'despues de mostrar los pokemons')
  return result
}
