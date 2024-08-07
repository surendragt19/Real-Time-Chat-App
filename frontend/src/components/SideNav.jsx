import React, { useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers';
import axios from 'axios';
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';


const SideNav = () => {
    const {otherUsers}=useSelector(store=>store.user)
    const navigate=useNavigate()
    const [search,setSerach]=useState("")
    const dispatch=useDispatch()
    const logoutHandler=async()=>{
        try {
            const res=await axios.get('http://localhost:8000/api/user/logout')
            toast.success("Log Out Sucessfully")
            navigate('/login')
        } catch (error) {
            toast.error("Not Logout")
            navigate('/login')
        }
    }
    const searchHandler=(e)=>{
        e.preventDefault();
        const conversationUser = otherUsers?.find((user)=> user.fullname.toLowerCase().includes(search.toLowerCase()));
        if(conversationUser){
            dispatch(setOtherUsers([conversationUser]));
        }else{
            toast.error("User not found!");
        }
    }
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
    <form onSubmit={searchHandler} className='flex items-center gap-2'>
        <input
        value={search}
        onChange={(e)=>setSerach(e.target.value)}
            className='input input-bordered rounded-md' type="text"
            placeholder='Search..'
        />
        <button type='submit' className='btn bg-zinc-700 text-white'>
            <BiSearchAlt2 className='w-6 h-6 outline-none'/>
        </button>
    </form>
    <div className="divider px-3"></div> 
    <OtherUsers/>
    <div className='mt-2'>
        <button onClick={logoutHandler}  className='btn btn-sm'>Logout</button>
    </div>
</div>
  )
}

export default SideNav