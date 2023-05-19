// import React from 'react'

import { MagnifyingGlassCircleIcon,ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'

// eslint-disable-next-line react/prop-types
const Searcher = ({onSetName}) => {
  let dispatch = useDispatch()

  return (
    <div className='relative w-80 mt-3'>
      <div>
        <ArrowLeftCircleIcon className="h-6 w-6 text-black-500 absolute top-0 right-0 border-l-2 border-black" />
      </div>
        <input 
          type="text" 
          className='border border-black w-full'
          onChange={(e) => dispatch(onSetName(e.target.value))}
          />
        <MagnifyingGlassCircleIcon className="h-6 w-6 text-black-500 absolute top-0 right-0 border-l-2 border-black" />
    </div>
  )
}

export default Searcher