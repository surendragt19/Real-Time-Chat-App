import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { setAuthUser } from '../redux/userSlice';

const Login = () => {

  const dispatch=useDispatch()

  const navigate=useNavigate()
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res=await axios.post('http://localhost:8000/api/user/login',user)
      navigate('/')
      console.log(res.data)
      dispatch(setAuthUser(res.data))
      toast.success("Login Success")
    } catch (error) {
      navigate('/login')
      toast.error("Not Login")
    }
    console.log("Logging in with:", user);
  };

  return (
    <div className="min-w-96 mx-auto">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              className='w-full input input-bordered h-10'
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder='Username'
              required />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              className='w-full input input-bordered h-10'
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder='Password'
              required />
          </div>
          <p className='text-center my-2'>Don't have an account? <Link to="/register">Register</Link></p>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
