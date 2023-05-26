import axios from "axios";

export async function getImagePokemon(namePokemon){
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
    
    return res
}