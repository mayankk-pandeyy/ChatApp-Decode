import React from 'react'
import SendMessage from './SendMessage'

const ChatBox = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4 py-4 px-2'>
        {/* Message Box */}
        <div className='w-full h-[85%] bg-[#1E1E1E] rounded-2xl'>

        </div>

        {/* Send Message */}
        <div className='w-full h-[10%]'>
            <SendMessage/>
        </div>
    </div>
  )
}

export default ChatBox