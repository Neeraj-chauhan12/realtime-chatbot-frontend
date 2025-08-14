import React from 'react'
import { IoIosChatboxes } from "react-icons/io";
import { PiLinkSimpleDuotone } from "react-icons/pi";
import { FaArrowUpLong } from "react-icons/fa6";



const Home = () => {
  return (
    <>
    <div className='h-screen w-screen bg-gray-800 flex'>
        <div className='h-screen w-[20vw] px-1 py-3 text-white'>
            <div className='flex justify-between items-center text-3xl'>
                <h1>Chatbot</h1>
                <h1><IoIosChatboxes /></h1>
            </div>

            <div className='chat h-[80vh] overflow-scroll '>

            </div>

            <div>
                <div className='border-2 py-2 px-5 rounded-2xl'>Get app</div>
                <div className='border-2 py-2 px-5 rounded-2xl mt-2'>my profile</div>
            </div>

        </div>

        <div className='h-screen w-[80vw] bg-gray-700 text-white flex justify-center flex-col items-center'>
            <h1 className='text-3xl'>Hey I'm Chatbot</h1>
            <h4 className='text-sm mb-3'>How can i help today?</h4>

            <div className='p-3 rounded-2xl w-[50vw] bg-gray-600'>
            <input
            placeholder='Message Chatbot...'
            className='py-2 px-5 rounded w-full mb-2' 
            type="text" 
            />

            <div className='flex justify-between items-center '>
                <div className='flex gap-2'> <h1 className='border-2 rounded-3xl px-3 py-2'>Chatbot R1</h1> <h1 className='border-2 rounded-3xl px-3 py-2'>Search</h1> </div>
                <div className='flex gap-2'><h1 className='border-2 py-2 px-2 rounded-full'><PiLinkSimpleDuotone /></h1><h1 className='border-2 py-2 px-2 rounded-full'><FaArrowUpLong /></h1></div>
            </div>

            </div>
            
            

        </div>

    </div>
      
    </>
  )
}

export default Home
