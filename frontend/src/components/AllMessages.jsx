import React from 'react'
import SingleMeggages from './SingleMeggages'

const AllMessages = () => {
  return (
    <div className='px-4 flex-1 overflow-auto'>
    <SingleMeggages/>
    <SingleMeggages/>
    <SingleMeggages/>
        </div>
  )
}

export default AllMessages