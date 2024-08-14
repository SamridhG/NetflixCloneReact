import { signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile, UserCredential } from "firebase/auth";
import { updateAuthToken,updateUID } from "../store/Auth/AuthSlice";
import {auth} from '../Services/Firebase/firebase'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../Routes/constant";
function useFirebase() {
    const navigate=useNavigate()
    const [isDisable,setDisable]=useState(false)
    const dispatch=useDispatch()
    const createUser=async (email:string,password:string,name:string)=>{
      setDisable(true)
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(userCredential.user,{displayName:name})
        emitEvent(userCredential) 
    } catch (error:any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error",errorCode,errorMessage)
    }finally{
        setDisable(false) 
      }
    }

    const signIn=async (email:string,password:string)=>{
         setDisable(true)
         try {
            const userCredential=await signInWithEmailAndPassword(auth, email, password)
            emitEvent(userCredential)
         } catch (error:any) {
            const errorCode = error.code;
            const errorMessage = error.message;
        console.log("error",errorCode,errorMessage)
         }finally{
            setDisable(false)
         }
    }
    const emitEvent=async(userCredential:UserCredential)=>{
        const userToken=await userCredential.user.getIdToken()   
        navigate(ROUTE.HOME)
        dispatch(updateAuthToken({token:userToken})) 
        dispatch(updateUID({uid:userCredential.user.uid})) 
        
    }
  return {
    createUser,
    isDisable,
    setDisable,
    signIn
  }
}

export default useFirebase
