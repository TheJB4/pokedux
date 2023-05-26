import axios from "axios"


export default function getPokemons(limit){
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then(res => {
        if(limit === 12 || limit <= 12){
            console.log('HOLA')
            return res.data.results
        }
        return res.data.results.splice(limit - 12)
    })
    .catch(error => console.log(error))
}