import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { ChatState } from '../../context/ChatProvider';
import ProfileCard from './ProfileCard';
import SearchCard from './SearchCard';

const Header = () => {
    const {user} = ChatState();

    const [openProfile, setOpenProfile] = useState(false);
    const [openSearchUsers, setOpenSearchUsers] = useState(false);

    function profilePicHandler(){
        setOpenProfile(!openProfile);
    }

    function searchUserHandler(){
        setOpenSearchUsers(!openSearchUsers);
    }


  return (
    <div className='w-[95%] mx-auto relative'>

        <div className='bg-gradient-to-r from-black from-20% via-[#FDC433] to-black to-85% border flex items-center justify-between py-2 px-5 rounded-full font-poppins z-10'>
            {/* Searh User */}
            <div className='flex items-center gap-1 bg-white px-2 py-1 rounded-2xl font-semibold' onClick={searchUserHandler}>
                <FaSearch />    
                <button>Search User</button>
            </div>

            {/* App Name */}
            <div className='text-2xl font-extrabold'>
                CONNECT - Chat App
            </div>

            {/* Profile Pic */}
            <div className='w-[40px] h-[40px] rounded-full border object-fill bg-[#82ff29] cursor-pointer relative' onClick={profilePicHandler}>
                    <img src={user.pic} className='rounded-full'/>   


            {/* Open Profile */}
                <div>
                    {
                        openProfile ? (<div className='absolute w-[400px] h-[320px] rounded-2xl bg-gradient-to-r from-[#0d0d0d] from-5% via-[#090e0f] via-55% to-[#212121] to-90% z-50 top-[50px] right-5 border'><ProfileCard setOpenProfile={setOpenProfile}/></div>) : (<div></div>)
                    }
                </div> 
            </div>
        </div>

        {/* Search User Card */}
        <div className='absolute z-50 mt-3'>
                    {
                        openSearchUsers ? (<div className='text-black h-[85vh] w-[25vw] bg-gradient-to-r from-[#0d0d0d] from-5% via-[#090e0f] via-55% to-[#212121] to-90% border rounded-2xl z-40'><SearchCard/></div>) : (<div></div>)
                    }
        </div>
    </div>
  )
}

export default Header