import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { PiEyeBold } from "react-icons/pi";
import { PiEyeClosedBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState( {
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword , setShowPassword] = useState(false);
    const [showConfirmPassword , setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student")

    function changeHandler(event){
        setFormData( (prevData) =>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account created successfully!");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("printing final account data ");
        console.log(finalData);

        navigate("/dashboard");

    }
  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>


            <button 
            className={ `${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "text-richblack-200 bg-transparent "} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("student")}
            >Student</button>
            <button 
            className={ `${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "text-richblack-200 bg-transparent "} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("instructor")}
            >Instructor</button>
            
        </div>

        <form onSubmit={submitHandler}>
            {/* first name and last name */}
            <div className='flex gap-x-4 justify-between mt-[20px]'>
                    <label >
                        <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name<sup  className='text-pink-200'>*</sup></p>
                        <input 
                        required
                        type='text'
                        name='firstName'
                        value={FormData.firstName}
                        placeholder='Enter your first name'
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'


                        />
                    </label>

                    <label >
                        <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name<sup  className='text-pink-200'>*</sup></p>
                        <input 
                        required
                        type='text'
                        name='lastName'
                        value={FormData.lastName}
                        placeholder='Enter your last name'
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'


                        />
                    </label>
            </div>

            {/* email addresss */}
            
            <div  className='w-full mt-[20px]'>
                    <label >
                        <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> Enter your emai address<sup  className='text-pink-200'>*</sup></p>
                        <input 
                        required
                        type='email'
                        name='email'
                        value={FormData.email}
                        placeholder='Enter your email id'
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
            </div>

            {/* create password and confirm password */}

            <div className='flex gap-x-4 justify-between  mt-[20px]'>
                <label className='relative'>
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Create Password<sup  className='text-pink-200'>*</sup></p>
                    <input 
                    required
                    type={showPassword ? ("text") : ("password")}
                    name='password'
                    value={FormData.password}
                    placeholder='Enter your password'
                    onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />

                    <span className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={ () => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<PiEyeBold fontSize={24} fill='#AFB2BF'/>) : (<PiEyeClosedBold fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                {/* confirm password */}
                <label className='relative '>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Confirm Password<sup  className='text-pink-200'>*</sup></p>
                    <input 
                    required
                    type={showConfirmPassword ? ("text") : ("password")}
                    name='confirmPassword'
                    value={FormData.confirmPassword}
                    placeholder='Confirm your password'
                    onChange={changeHandler}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'


                    />

                    <span className='absolute right-3 top-[38px] cursor-pointer'
                     onClick={ () => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ? (<PiEyeBold fontSize={24} fill='#AFB2BF'/>) : (<PiEyeClosedBold fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                 </label>



            </div>
           
            <button className='bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[12px] mt-6'>
                Create Account
            </button>

        </form>
    </div>
  )
}

export default SignupForm