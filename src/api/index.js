import axios from "axios"


export default function getPokemons(){
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=12')
    .then(res => res.data.results)
    .catch(error => console.log(error))
}