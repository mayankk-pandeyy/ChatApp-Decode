import React from 'react'
import { MdEmojiEmotions } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const SendMessage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center px-4 gap-3 text-white font-poppins'>
        {/* Emoji Add Button */}
        <div className='text-2xl'>
            <button>
                <MdEmojiEmotions />
            </button>
        </div>

        {/* Input */}
        <div className='w-full'>
            <input 
                placeholder='Message'
                className='w-full outline-none px-4 py-2 rounded-2xl bg-transparent border'
            />
        </div>

        {/* Send message Button */}
        <div className='text-2xl'>
            <button>
                <IoSend />
            </button>
        </div>
    </div>
  )
}

export default SendMessage