/* eslint-disable react/prop-types */
//import React from 'react'
// import {addFavorite} from '../../actions/index.js'
import FavoriteIcon from '../FavoriteIcon'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../slices/dataSlice'
import { useEffect, useState } from 'react'


const PokemonCard = ({name,description,image,pokemonId,isFavorite}) => {
  let dispatch = useDispatch()
  let [viewDescription,setViewDescription] = useState(false)
  let [numberRotate,setNumberRotate] = useState(0)
  return (
    <>
      <figure className='w-50 p-3 border border-black rounded-sm flex flex-col justify-center items-center relative z-1'>
          {viewDescription && 
          <div className='w-full h-full absolute top-0 right-0 bg-red-200 z-3'>
            <button onClick={()=>setViewDescription(false)}>X</button>
          </div>}
            <div className='absolute top-0 right-0 border border-black text-center m-1 rounded-sm'>
                <FavoriteIcon isFavorite={isFavorite} OnClick={()=> dispatch(addFavorite({pokemonId}))}/>
            </div>
            <p>{name}</p>
            <img src={image[0]} alt={name} />
            <span>{description}</span>
            <button onClick={()=>setViewDescription(true)}><InformationCircleIcon className="h-8 w-5 pt-1 pr-1"></InformationCircleIcon></button>
      </figure>
    </>
  )
}

export default PokemonCard