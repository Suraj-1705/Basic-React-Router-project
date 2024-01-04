import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn

  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-4 items-center mx-auto'>
        {/* LOGO */}
        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>
        {/* NAVBAR LINKS */}
        <nav className=' flex text-white gap-x-6'>
            <Link to="/" >
            Home
            </Link>
            <Link to="#" >
            About
            </Link>
            <Link to="#" >
            Contact
            </Link>
        </nav>

{/* login signup logout dashboard */}

    <div className='flex items-center gap-x-4'>
        { !isLoggedIn &&
            <Link to="/login">
            <button className='text-white bg-richblack-800 py-[8px] px-[12px]
                                rounded-[8px] border border-richblack-700'>
                Log in
            </button>
        </Link>
        }

        { !isLoggedIn &&
            <Link to="/signup">
            <button className='text-white bg-richblack-800 py-[8px] px-[12px]
                                rounded-[8px] border border-richblack-700' >
                Signup
            </button>
        </Link>
        }

       { isLoggedIn &&
       <Link to="/">
            <button className='text-white bg-richblack-800 py-[8px] px-[12px]
                                rounded-[8px] border border-richblack-700'
                                onClick={ () => {
                setIsLoggedIn(false)
                toast.success("Logged Out")
            }}>
                Logout
            </button>
        </Link>
        }

        { isLoggedIn &&
            <Link to="/dashboard">
            <button className='text-white bg-richblack-800 py-[8px] px-[12px]
                                rounded-[8px] border border-richblack-700'>
                Dashboard
            </button>
        </Link>
        }


    </div>









    </div>
  )
}

export default Navbar