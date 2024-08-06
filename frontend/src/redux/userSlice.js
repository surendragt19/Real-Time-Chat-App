import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:"user",
    initialState:{
        authuser:null,
        otherUsers:null,
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.authuser=action.payload;
        },
        setOtherUsers:(state,action)=>{
            state.otherUsers=action.payload;
        }
    }
})
export const {setAuthUser,setOtherUsers}=userSlice.actions;
export default userSlice.reducer;