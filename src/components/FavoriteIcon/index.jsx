/* eslint-disable react/prop-types */
import React from 'react'

import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

const FavoriteIcon = ({isFavorite,OnClick}) => {
    let Icon = isFavorite ? StarIconSolid : StarIcon
  return (
    <button onClick={OnClick}>
        <Icon className="h-4 w-4 pt-1 pr-1 text-" /> 
    </button>
  )
}

export default FavoriteIcon