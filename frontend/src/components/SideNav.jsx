import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers';
import axios from 'axios';
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const SideNav = () => {
    const navigate=useNavigate()
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
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
    <form action="" className='flex items-center gap-2'>
        <input
            className='input input-bordered rounded-md' type="text"
            placeholder='Search...'
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