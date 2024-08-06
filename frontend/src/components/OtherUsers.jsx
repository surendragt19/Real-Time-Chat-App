import React from 'react'
import Otheruser from './Otheruser'
import useGetOtherUsers from '../customHook/useGetOtherUsers'
import {useSelector} from 'react-redux'

const OtherUsers = () => {
  //custum hook
  useGetOtherUsers();
  const {otherUsers}=useSelector(store=>store.user)
  if(!otherUsers) return ;
  return (
    <div className="overflow-auto flex-1">
      {
        otherUsers.map((user) => (
          <Otheruser key={user._id} user={user} />
        ))
      }
    </div>
  )
}

export default OtherUsers