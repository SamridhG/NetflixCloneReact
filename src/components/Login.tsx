import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/> 
      <div className="absolute h-full w-full">
        <img 
        className="h-full w-full "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
        alt="logo"/>
      </div>
      <form className="w-3/12 absolute p-12 bg-black text-white mx-auto left-0 right-0 my-72 rounded-lg bg-opacity-80">
        <h1 className="py-4 text-6xl font-bold">{isSignInForm? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full   Name" className="p-6 my-6 w-full bg-gray-800 text-2xl rounded-lg"></input>}
        <input type="text" placeholder="Email Address" className="p-6 my-6 w-full bg-gray-800 text-2xl rounded-lg"></input>
        <input type="password" placeholder="Password" className="p-6 my-6 w-full bg-gray-800 text-2xl rounded-lg"></input>
        <button className="p-6 my-8 w-full bg-red-700 rounded-lg text-2xl font-semibold">{isSignInForm? "Sign In":"Sign Up"}</button>
        <p className="p-2 text-center text-2xl cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
