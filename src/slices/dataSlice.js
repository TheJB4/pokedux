import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import getPokemons from "../api";
import { getImagePokemon } from "../utilities/getImagePokemon";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],
    searchedPokemon: null
}

export const addImageToPokemons = createAsyncThunk(
    'data/addImageToPokemons',
    async(pokemons,{dispatch})=> {
        let newPokemons;
        
        if(pokemons){
            dispatch(setPokemons(pokemons))
            dispatch(setLoading(false))
        }else{
            newPokemons = await getPokemons();
        }

        for (let i = 0; i < newPokemons.length; i++) {
             const element = newPokemons[i];
             let data = await getImagePokemon(element.name)
            
             let image = data.data.sprites.front_default
             let habilities = data.data.abilities
    
             element.image = image
             element.abilities = habilities
             element.types = data.data.types
             element.id = i
    
             console.log(element)
        }
        dispatch(setPokemons(newPokemons))
        dispatch(setLoading(false))
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        /*SET_POKEMON*/
        setPokemons: (state,action) => {
            state.pokemons = action.payload
        },
        /*ADD_FAVORITE*/
        addFavorite: (state,action) => {
            let indexPokemon = state.pokemons.findIndex(pokemon => pokemon.id === action.payload.pokemonId)
            
            let isFavorite = state.pokemons[indexPokemon].isFavorite

            state.pokemons[indexPokemon].isFavorite = !isFavorite
        },
        /*SEARCHED_POKEMON_INPUTVALUE*/
        setSearchNamePokemon:(state,action) =>{
            state.searchedPokemon = action.payload
        },
    }
})

export const {setPokemons,addFavorite,setSearchNamePokemon,filteredPokemonSearch} = dataSlice.actions
export default dataSlice.reducer