import React from 'react';
import frame from "../assets/frame.png";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from "react-icons/fc";


const Template = ({title, desc1, desc2 , image, setIsLoggedIn, formtype}) => {
  return (
    <div className='flex w-11/12 justify-between max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 '>

        <div className='w-11/12 max-w-[450px]'>
        <h1 className='text-richblack-5 text-[1.875rem] leading-[2.375rem] font-semibold'>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-richblack-100'>{desc1}</span>
            <br/>
            <span className='text-blue-100 italic'>{desc2}</span>
        </p>
        

        {formtype === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>) }

        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full bg-richblack-700 h-[1px]'></div>
            <p className='text-richblack-700 font-medium leading-[1.375rem]'>
                OR
            </p>
            <div className='w-full bg-richblack-700 h-[1px]'></div>
        </div>

        <button className='flex items-center text-richblack-100 px-[12px] py-[8px] mt-6 gap-x-2 justify-center bg-richblack-700 
        w-full border border-richblack-700 rounded-[8px]'>
        
            <FcGoogle/>
            Sign in with Google
        </button>

        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frame}
            alt="pattern"
            height={504}
            width={558}
            loading='lazy' />

            <img src={image}
            alt="pattern"
            height={504}
            width={558}
            loading='lazy' 
            className=' absolute -top-4 right-4'/>
        </div>

    </div>
  )
}

export default Template