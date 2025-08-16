import React, { useState } from 'react'

import { PiLinkSimpleDuotone } from "react-icons/pi";
import { FaArrowUpLong } from "react-icons/fa6";

const Chatpage = () => {

    const [inputValue,setInputValue]=useState(" ")
    const [typeValue,setTypeValue]=useState(" ")

   const handleclick=()=>{

    const trimmed=inputValue.trim()
    if(!trimmed) return
     setTypeValue(trimmed)
     setInputValue(" ")

    setTypeValue(inputValue)
    setInputValue(" ")
   }

   const handleEnter=(e)=>{
    if(e.key==="Enter"){
        handleclick()
    }
   }

  return (
    <>     <div className='flex justify-center items-center flex-col'>
           <h1 className='text-3xl'>Hey I'm Chatbot</h1>
            <h4 className='text-sm mb-3'>How can i help today?</h4>
         </div>
            


         {/* Prompt  */}
         <div className='chat w-full max-w-4xl flex-1 overflow-scroll mt-7 mb-3 max-h-[60vh] px-1'>
            {typeValue && (
            <div className='w-full text-white flex justify-end '>
                <div className='bg-blue-500 self-end max-w-[75%] rounded-xl px-3 py-2'>
                   {
                    typeValue
                   }
                </div>
              
            

            </div>
            )
           }

         </div>

            {/* INPUT  BOX */}
            
            <div className='p-3 rounded-2xl w-[50vw] bg-gray-600'>
            <input
            value={inputValue}
            onKeyDown={handleEnter}
            onChange={(e)=>setInputValue(e.target.value)}
            placeholder='Message Chatbot...'
            className='py-2 px-2 rounded w-full mb-2' 
            type="text" 
            />

            <div className='flex justify-between items-center '>
                <div className='flex gap-2'> 
                    <h1 className='border-2 rounded-3xl px-3 py-2'>Chatbot R1</h1>
                     <h1 className='border-2 rounded-3xl px-3 py-2'>Search</h1> </div>
                <div className='flex gap-2'>
                    <h1 className='border-2 py-2 px-2 rounded-full'><PiLinkSimpleDuotone /></h1>
                    <h1 onClick={handleclick} className='border-2 py-2 px-2 rounded-full'><FaArrowUpLong /></h1></div>
            </div>

            </div>
    </>
  )
}

export default Chatpage
