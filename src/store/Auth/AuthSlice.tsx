import { createSlice } from "@reduxjs/toolkit";
const Auth=createSlice({
    name:'auth',
    initialState:{token:null,uid:null},
    reducers:{
        updateAuthToken:(state,action)=>({
          ...state,
          token:action.payload.token
        }),
        updateUID:(state,action)=>({
          ...state,
          uid:action.payload.uid
        })
    }
})
export const{updateAuthToken,updateUID}=Auth.actions
export default Auth.reducer