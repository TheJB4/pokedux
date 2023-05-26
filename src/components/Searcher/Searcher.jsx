// import React from 'react'

import { MagnifyingGlassCircleIcon,ArrowLeftCircleIcon,ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { setSearchCounter } from '../../slices/dataSlice'

// eslint-disable-next-line react/prop-types
const Searcher = ({onSetName}) => {
  let dispatch = useDispatch()

  return (
    <div>
      <div className='flex w-full justify-between'>
        <button onClick={()=> dispatch(setSearchCounter('RESTA'))}><ArrowLeftCircleIcon className="h-6 w-6"/></button>
        <button onClick={()=> dispatch(setSearchCounter('SUMA'))}><ArrowRightCircleIcon className="h-6 w-6"/></button>
      </div>
      <div className='relative w-80 mt-3'>
          <input 
            type="text" 
            className='border border-black w-full'
            onChange={(e) => dispatch(onSetName(e.target.value))}
            />
          <MagnifyingGlassCircleIcon className="h-6 w-6 text-black-500 absolute top-0 right-0 border-l-2 border-black" />
      </div>
    </div>
  )
}

export default Searcher