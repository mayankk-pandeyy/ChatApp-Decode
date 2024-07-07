import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';

const Home = () => {

    const [login, setLogin] = useState(false);

    function loginHandler(){
        setLogin(true);
    }

    function signupHandler(){
        setLogin(false);
    }

  return (
    <div className='w-[100vw] h-[100vh] text-white flex items-center gap-[20%]'>
        {/* Left Part */}

        <div className='bg-black mx-6 rounded-3xl'>
            <div className='flex px-6 py-4 font-poppins gap-3 rounded-3xl font-bold'>
                {/* Login Button */}
                <div style={{backgroundColor : login ? ("#4269E2") : ("")}} className='px-2 py-1 rounded-xl'>
                    <button onClick={loginHandler}>
                        Login
                    </button>
                </div>

                {/* Signup Button */}
                <div style={{backgroundColor : login ? ("") : ("#4269E2")}} className='px-2 py-1 rounded-xl'>
                    <button onClick={signupHandler}>
                        Signup
                    </button>
                </div>
            </div>
        </div>

        {/* Right Part */}
        <div className='w-1/2'>
            {
                login ? (<Login/>) : (<Signup/>)
            }
        </div>
    </div>
  )
}

export default Home