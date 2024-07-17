import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { ChatState } from '../../context/ChatProvider';

const MyChats = () => {

  let {user} = ChatState();

  return (
    <div className='text-white px-3 py-3 flex flex-col gap-4'>
        <div className='flex justify-between font-poppins'>
            <div className='text-lg font-bold'>
                My Chats
            </div>
            <button className='flex items-center gap-2 bg-white text-black font-bold px-3 py-1 rounded-2xl'>
                New Group Chat
                <FaPeopleGroup />
            </button>
        </div>

        {/* User */}
       <div className='bg-[#00FFA2] py-2 text-center rounded-xl text-xl text-black font-semibold font-poppins'>
            {
              user ? <div>{user.name}</div> : <div></div>
            }
       </div>
    </div>
  )
}

export default MyChats