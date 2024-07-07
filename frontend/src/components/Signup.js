import React, { useState } from 'react'
import fruitImg from "../assets/fruit.svg"
import { FaAnglesRight } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toast'
import Loading from './Loading';
import axios from "axios";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Signup = () => {

    const [name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[pic, setPic] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();


    function nameHandler(event){
        // console.log(event.target.value);
        setName(event.target.value);
    }

    function emailHandler(event){
        setEmail(event.target.value);
    }

    function passwordHandler(event){
        setPassword(event.target.value);
    }

    function confirmPasswordhandler(event){
        setConfirmPassword(event.target.value);
    }

    function uploadPicHandler(event){
        const pics = event.target.files[0];
        setLoading(true);
        if(pics === undefined){
            toast.error("Please Select an Image");
            return;
        }

        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "chat-app-connect");
        data.append("cloud_name", "decode");
        fetch("https://api.cloudinary.com/v1_1/decode/image/upload", {
            method : "post",
            body : data
        }).then((res) => res.json())
        .then((data)=>{
            console.log(data);
            setPic(data.url.toString());
            toast.success("Pic uploaded successfully");
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    }


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowconfirmPassword] = useState(false);

    function showPasswordHandler(){
        setShowPassword(!showPassword);
    }

    function showConfirmPasswordHandler(){
        setShowconfirmPassword(!showConfirmPassword);
    }

    async function submitHandler(event){
        event.preventDefault();

        if(name === ""){
            toast.warn("Please Enter Your Name");
        }

        if(email === ""){
            toast.info("Please Enter Your Email");
        }

        if(password === ""){
            toast.error("Please Enter Your Password");
        }

        if(password !== confirmPassword){
            toast.error("Passwords do not Match");
        }

        try{
            setLoading(true);

            const config = {
                headers : {
                    "Content-type" : "application/json"
                }
            }

            let userDataSend = {};

            if(pic === ""){
                userDataSend = {name, email, password};
            }else{
                userDataSend = {name, email, password, pic};
            }

            await axios.post("/api/user", userDataSend, config);

            toast.success("New User Created Successfully");
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
                Welcome!
            </div>
        </div>


        <form className='flex flex-col gap-6 items-center mt-8 px-10 font-poppins' onSubmit={submitHandler}>
            {/* Name */}
            <div className='border w-full rounded-3xl'>
                <input 
                    type='text'
                    placeholder='Mayank Pandey'
                    className='outline-none bg-transparent py-3 px-3 w-full'
                    onChange={nameHandler}
                />
            </div>

            {/* Email */}
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

            {/* Confirm Password */}
            <div className='border w-full rounded-3xl flex items-center'>
                <input
                    type={showConfirmPassword ? ("text"): ("password")}
                    placeholder='Confirm Your Password'
                    className='outline-none bg-transparent py-3 px-3 w-full'
                    onChange={confirmPasswordhandler}
                />
                <div onClick={showConfirmPasswordHandler} className='pr-5 text-2xl cursor-pointer'>
                    {
                        showConfirmPassword ? (<FaEyeSlash />) : (<FaEye />)
                    }
                </div>
            </div>

            {/* Add your avatar/profile pic */}
            <div className='border w-full rounded-full'>
                <input
                    type='file'
                    accept='image/*'
                    className='outline-none bg-transparent py-3 px-6 w-full cursor-pointer' 
                    onChange={uploadPicHandler}
                />
            </div>

            {/* Submit Button */}
            <button className='font-poppins bg-[#4269E2] px-5 py-3 rounded-full text-sm'>
                {
                    loading ? (
                        <div>
                            <Loading className="w-[10px] h-[10px]"/>
                        </div>
                    ) : (
                        <div className='flex items-center gap-1'>
                            <div className='font-bold'>
                                Signup
                            </div>
                            <div className='font-bold animate-pulse'>
                                <FaAnglesRight />
                            </div>
                        </div>
                    )
                }
                <ToastContainer delay={3000} position='top-right'/>
            </button>
        </form>
    </div>
  )
}

export default Signup