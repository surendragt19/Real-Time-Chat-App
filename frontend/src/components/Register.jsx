import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';

const Register = () => {

  const navigate=useNavigate()
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "", 
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
        const response = await axios.post('http://localhost:8000/api/user/register', user);
       if(response.data.success){
        navigate("/login")
        toast.success("Account created successfully!")
       }
    } catch (error) {
      navigate('/register')
      toast.error("Account Not created!")
    }
    console.log(user); 
    setUser({
        fullname: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "", 
    })
  };

  return (
    <div className="min-w-96 mx-auto">
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center'>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              className='w-full input input-bordered h-10'
              type="text"
              name="fullname"
              value={user.fullname}
              onChange={handleChange}
              placeholder='Full Name'
              required />
          </div>
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
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              className='w-full input input-bordered h-10'
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              placeholder='Confirm Password'
              required />
          </div>
          <div className='my-4'>
            <label className='label p-2'>
              <span className='text-base label-text'>Gender</span>
            </label>
            <select
              className='w-full input input-bordered h-10'
              name="gender"
              value={user.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <p className='text-center my-2'>Already have an account? <Link to="/login">Login</Link></p>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
