import React, { useState } from 'react';
import { PiEyeBold } from "react-icons/pi";
import { PiEyeClosedBold } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({
        email:"", password:""
    })

    const [showPassword,setShowPassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler( event ){
        setFormData( (prevData) =>(
            {
            ...prevData,
            [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");

        console.log("printing data");
        console.log(formData); 
    }
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
            >Enter your email address <sup className='text-pink-200'>*</sup></p>
            <input 
            required
            type='text'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter your email id'
            name='email'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> 
            Password <sup className='text-pink-200'>*</sup></p>
            <input 
            required
            type={showPassword ? ("text"):("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter your password'
            name='password'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span className='absolute right-3 top-[38px] cursor-pointer'
             onClick={ () => setShowPassword((prev) => !prev)}>
                {showPassword ? 

                (<PiEyeBold fontSize={24} fill='#AFB2BF'/>) : 
                
                (<PiEyeClosedBold fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-xs text-blue-100 mt-1 ml-auto max-w-max'> Forgot Password</p>
            </Link>

        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[12px] mt-6'>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm