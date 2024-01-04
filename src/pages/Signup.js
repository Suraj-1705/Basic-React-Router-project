import React from 'react'
import Template from '../components/Template'
import signupImg from "../assets/signup.png"

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Join the millions learning to code with studynotion for free"
    desc1="Build skills for today , tomorrow and beyond"
    desc2="Educaton to future-proof yourself"
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    
    
    />
  )
}

export default Signup