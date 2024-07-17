import React, { useState } from 'react'
import fruitImg from "../assets/fruit.svg"
import { CiLogin } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toast';
import axios from 'axios';
import Loading from './Loading';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    function showPasswordHandler(){
        setShowPassword(!showPassword);
    }

    function emailHandler(event){
        setEmail(event.target.value);
    }

    function passwordHandler(event){
        setPassword(event.target.value);
    }


    async function submitHandler(event){
        event.preventDefault();

        if(email === ""){
            toast.warn("Please enter your email")
            return;
        }

        if(password === ""){
            toast.error("Please enter your Password");
            return;
        }

        try{
            setLoading(true);
            const config = {
                headers : {
                    "Content-type" : "application/json"
                }
            }

            const {data} = await axios.post("/api/user/login", {email, password}, config);
            toast.success("Login Successfull");

            localStorage.setItem('userInfo', JSON.stringify(data));

            setLoading(false);
            history.push("/chats");
            

        }catch(error){
            toast.error(error);
            setLoading(false);
        }


    }



  return (
    <div className='w-[60%] bg-[#333333] py-10 rounded-3xl'>
        <div className='flex flex-col items-center gap-4'>
            <div className='w-[50px]'>
                <img src={fruitImg} alt='fruitImg'/>
            </div>
            <div className="text-2xl font-bold font-poppins">
                Welcome Back
            </div>
        </div>


        <form className='flex flex-col gap-6 items-center mt-8 px-10 font-poppins' onSubmit={submitHandler}>

            {/* Emai */}
            <div className='border w-full rounded-3xl'>
                <input 
                    type='text'
                    placeholder='mayankp7781@gmail.com'
                    className='outline-none bg-transparent py-3 px-3 w-full'
                    onChange={emailHandler}
                />
            </div>

            {/* Password */}
            <div className='border w-full rounded-3xl flex items-center'>
                <input
                    type={showPassword ? ("text"): ("password")}
                    placeholder='Enter Your Password'
                    className='outline-none bg-transparent py-3 px-3 w-full'
                    onChange={passwordHandler}
                />
                <div onClick={showPasswordHandler} className='pr-5 text-2xl cursor-pointer'>
                    {
                        showPassword ? (<FaEyeSlash />) : (<FaEye />)
                    }
                </div>
            </div>

            {/* Submit Button */}
            <button className='font-poppins bg-[#4269E2] px-5 py-3 rounded-full text-sm'>
                {
                    loading ? (<Loading/>) : (
                        <div className='flex items-center gap-1'>
                            <div className='font-bold'>
                                Login
                            </div>
                            <div className='text-xl font-bold animate-pulse'>
                                <CiLogin />
                                <ToastContainer delay={3000} position='top-right'/>
                            </div>
                        </div>
                    )
                }
            </button>
        </form>
    </div>
  )
}

export default Login