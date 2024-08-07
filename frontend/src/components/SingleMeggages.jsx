import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";


const SingleMeggages = ({ message }) => {
  const scroll=useRef()
  const {authuser,selectedUser}=useSelector((store)=>store.user)
  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior:"smooth"})
  },[message])
  return (
    <div ref={scroll} className={`chat ${authuser?._id === message?.senderId ? "chat-end" : "chat-start"}`}>
    <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={message?.senderId === authuser?._id ? authuser?.profilePhoto : selectedUser?.profilePhoto} />
        </div>
    </div>
    <div className="chat-header">
        <time className="text-xs opacity-50 text-black">12:45</time>
    </div>
    <div className="chat-bubbl">{message?.message}</div>
</div>
  );
};

export default SingleMeggages;
