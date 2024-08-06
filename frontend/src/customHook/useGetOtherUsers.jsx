import React, { useEffect } from 'react';
import axios from 'axios';

const useGetOtherUsers = () => {
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true; 
        const res = await axios.get('http://localhost:8000/api/user');
        console.log(res); 
      } catch (error) {
        console.error('Error fetching other users:', error);
      }
    };

    fetchOtherUsers();
  }, []); 
};

export default useGetOtherUsers;
