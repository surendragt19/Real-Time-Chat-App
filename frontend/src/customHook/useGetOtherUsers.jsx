import React, { useEffect } from 'react';
import axios from 'axios';
import {useDispatch} from "react-redux"
import { setOtherUsers } from '../redux/userSlice';

const useGetOtherUsers = () => {

    const dispatch=useDispatch()
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true; 
        const res = await axios.get('http://localhost:8000/api/user/');
        console.log(res); 
        //store

        dispatch(setOtherUsers(res.data.otherUsers))
      } catch (error) {
        console.error('Error fetching other users:', error);
      }
    };

    fetchOtherUsers();
  }, [dispatch]); 
};

export default useGetOtherUsers;
