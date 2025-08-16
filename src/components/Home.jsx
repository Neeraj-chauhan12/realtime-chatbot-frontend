import React from 'react'

import Slidebar from './Slidebar';
import Chatpage from './Chatpage';




const Home = () => {
  return (
    <>
    <div className='h-screen w-screen bg-gray-800 flex'>
        <div className='h-screen w-[20vw] px-1 py-3 text-white'>
            <Slidebar />
        </div>

        <div className='h-screen w-[80vw] bg-gray-700 text-white flex justify-center flex-col items-center'>
            <Chatpage /> 
        </div>

    </div>
      
    </>
  )
}

export default Home
