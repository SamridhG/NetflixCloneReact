import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LINK } from "../helper/constant";
import { ROUTE } from "../../../Routes/constant";
import Login from "./Login";
import Register from "./Register";

function BaseComponent() {
  const { pathname } = useLocation();
  const [currentAuth,setCurrentAuth]=useState(LINK.LOGIN)
  console.log(pathname);
useEffect(()=>{
      if(pathname===ROUTE.LOGIN){
        setCurrentAuth(LINK.LOGIN)
      }else{
        setCurrentAuth(LINK.SIGNUP)
      }
},[pathname])
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
          alt="logo"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Place any centered content here */}
          <div className="w-3/12 absolute p-12 bg-black text-white mx-auto left-0 right-0 my-72 rounded-lg bg-opacity-80">
           {currentAuth==LINK.LOGIN ? <Login/> : <Register/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseComponent;
