import React from 'react'
import { ChatState } from '../../context/ChatProvider'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ProfileCard = (props) => {

    let setOpenProfile = props.setOpenProfile;

    const history = useHistory();

    const {user} = ChatState();


    function logoutHandler(){
        localStorage.removeItem('userInfo');
        history.push("/");
    }

    function closeProfileHandler(){
        setOpenProfile(false);
    }


  return (
    <div className='flex flex-col items-center mt-4 gap-4 font-poppins'>
        {/* User Name */}
        <div className='text-white text-xl font-bold'>
            {user.name}
        </div>

        {/* User Avatar */}
        <div className='w-[150px] h-[150px] border border-[#00FFA2] rounded-full'>
            <img src={user.pic} className='rounded-full' />
        </div>

        {/* Email */}

        <div className='text-white text-lg'>
            <span className='font-bold text-[#D3DE00]'>Email :</span> {user.email}
        </div>

        <div className='w-full px-10 text-white flex justify-between'>
            {/* Close Profile Card */}
            <button className='bg-[#FC9300] px-3 py-1 hover:bg-[#FCCA00] hover:text-black rounded-2xl font-semibold' onClick={closeProfileHandler}>
                Close
            </button>

            {/* Logout */}
            <button className='bg-[#F736BD] px-3 py-1 hover:bg-[#FCCA00] hover:text-black rounded-2xl font-semibold' onClick={logoutHandler}>
                Logout
            </button>
        </div>
    </div>
  )
}

export default ProfileCard