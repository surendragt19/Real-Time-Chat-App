import React from 'react'
import Otheruser from './Otheruser'
import useGetOtherUsers from '../customHook/useGetOtherUsers'


const OtherUsers = () => {
  useGetOtherUsers();
  return (
    <div className="overflow-auto">
    <Otheruser/>
    <Otheruser/>
    <Otheruser/>
    <Otheruser/>
    <Otheruser/>
    <Otheruser/>
    <Otheruser/>
    <Otheruser/>
    <Otheruser/>
    <Otheruser/>
</div>
  )
}

export default OtherUsers