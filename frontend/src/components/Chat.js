import React from 'react'
import Header from './chat/Header'
import MyChats from './chat/MyChats'
import ChatBox from './chat/ChatBox'


const Chat = () => {


  return (
    <div className='bg-[#21005D] w-[100vw] h-[100vh] relative flex flex-col items-center'>
      {/* Header */}
      <div className='w-full absolute top-2'>
        <Header/>
      </div>

      {/* Chats Section */}
      <div className='w-[95%] absolute top-20 flex gap-2'>
        {/* My Chats   */}
        <div className='w-1/4 h-[85vh] bg-[#0C141F] border rounded-xl'>
          <MyChats/>
        </div>

        {/* Chat Box */}
        <div className='w-3/4 h-[85vh] bg-[#0C141F] border rounded-xl'>
          <ChatBox/>
        </div>
      </div>
    </div>
  )
}

export default Chat