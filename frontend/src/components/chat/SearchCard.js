import React, { useState } from 'react'
import { ChatState } from '../../context/ChatProvider';

const SearchCard = () => {

    const [searchUser, setSearchUser] = useState("");

    const {user} = ChatState();

    function fetchUserHandler(event){
        setSearchUser(event.target.value);
    }

  return (
    <div className='w-full px-6 flex flex-col py-4 items-center gap-5 font-poppins'>
        {/* Search User */}
        <div className='w-full flex gap-4'>
            <input 
                type='text'
                placeholder='Search User'
                onChange={fetchUserHandler}
                className='text-white bg-transparent outline-none border w-full px-4 py-1 rounded-2xl text-lg'
            />
            
            <button className='bg-[#FDC433] px-3 rounded-full font-semibold' >Go</button>
        </div>

        {/* Logged In user */}
        <div className='w-full flex items-center gap-2 text-black bg-[#00FFA2] px-2 rounded-xl'>
            {/* Avatar */}
            <div className='w-[50px] h-[50px] border rounded-full'>
                <img src={user.pic} className='rounded-full'/>
            </div>


            {/* Name & Email */}
            <div>
                <div className='font-bold text-xl'>
                    {user.name}
                </div>

                <div>
                    <span className='font-bold text-[#F736BD]'>Email :</span> {user.email}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchCard