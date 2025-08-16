import React from 'react'
import { IoIosChatboxes } from "react-icons/io";
import pic from "../../public/pr.jpg"

const Slidebar = () => {
  return (
    <>
      <div className='flex justify-between items-center text-3xl'>
                    <h1>Chatbot</h1>
                    <h1><IoIosChatboxes /></h1>
                </div>
    
                <div className='chat h-[75vh] overflow-scroll '>
                    <div className='flex w-44 ml-3 bg-blue-600 text-white px-5 py-2 mt-5 rounded gap-4'>
                        <IoIosChatboxes className='text-3xl' />
                        <h1>Chat box</h1>
                    </div>
    
                </div>
    
                <div>
                    <div className='border-2 py-2 px-5 rounded-2xl'>Get app</div>
                    <div className='border-2 py-2 px-5 rounded-2xl mt-2 flex '>
                        <img className='rounded-full text-white h-8 w-8 object-contain' src={pic} alt="" />
                        <h1 >My profile</h1>
                        </div>
                </div>
      
    </>
  )
}

export default Slidebar
