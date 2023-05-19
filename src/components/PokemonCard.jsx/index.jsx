/* eslint-disable react/prop-types */
//import React from 'react'
// import {addFavorite} from '../../actions/index.js'
import FavoriteIcon from '../FavoriteIcon'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../slices/dataSlice'


const PokemonCard = ({name,description,image,pokemonId,isFavorite}) => {
  let dispatch = useDispatch()
  return (
    <figure className='w-50 p-3 border border-black rounded-sm flex flex-col justify-center items-center relative'>
          <div className='absolute top-0 right-0 border border-black text-center m-1 rounded-sm'>
              <FavoriteIcon isFavorite={isFavorite} OnClick={()=> dispatch(addFavorite({pokemonId}))}/>
          </div>
          <p>{name}</p>
          <img src={image} alt={name} />
          <span>{description}</span>
          <InformationCircleIcon className="h-8 w-5 pt-1 pr-1" />
    </figure>
  )
}

export default PokemonCard