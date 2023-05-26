import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import getPokemons from "../api";
import { getImagePokemon } from "../utilities/getImagePokemon";
import { setLoading } from "./uiSlice";

const initialState = {
    searchCount: 12,
    pokemons: [],
    searchedPokemon: null
}

export const addImageToPokemons = createAsyncThunk(
    'data/addImageToPokemons',
    async(pokemons,{dispatch,getState})=> {
        let limit = getState().data.searchCount
        let newPokemons;
        
        if(pokemons){
            dispatch(setPokemons(pokemons))
            dispatch(setLoading(false))
        }else{
            newPokemons = await getPokemons(limit);
        }

        for (let i = 0; i < newPokemons.length; i++) {
             const element = newPokemons[i];
             let data = await getImagePokemon(element.name)
            
             let image = [data.data.sprites.front_default,data.data.sprites.back_default]
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
        setSearchCounter:(state,action) =>{
            console.log(state)
            //action.payload === 'SUMA' ? newCount + 12 : newCount - 12
            if(action.payload === 'SUMA'){
                console.log('suma')
                state.searchCount += 12
            }else{
                console.log('resta')
                state.searchCount -= 12
            }
        }
    }
})

export const {setPokemons,addFavorite,setSearchNamePokemon,filteredPokemonSearch,setSearchCounter} = dataSlice.actions
export default dataSlice.reducer