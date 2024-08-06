import React from 'react'
import SideNav from './SideNav'
import Message from './Message'


const Home = () => {
  return (
   <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <SideNav/>
    <Message/>
   
   </div>
  )
}

export default Home