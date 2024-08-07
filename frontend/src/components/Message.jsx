import React, { useEffect } from "react";
import SendInputMsg from "./SendInputMsg";
import AllMessages from "./AllMessages";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const Message = () => {

  const { selectedUser,authuser } = useSelector((store) => store.user);
  const dispatch=useDispatch()
  useEffect(()=>{
    return ()=>dispatch(setSelectedUser(null))
  },[])
  return (
    <>
      {selectedUser !== null ? (
        <div className="md:min-w-[550px] flex flex-col">
          <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2">
            <div>
              <div className="w-12 rounded-full">
                <img src={selectedUser?.profilePhoto} alt="user-profile" />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between gap-2">
                <p>{selectedUser?.fullname}</p>
              </div>
            </div>
          </div>
          <AllMessages />
          <SendInputMsg />
        </div>
      ) : (
        <div className="md:min-w-[550px] flex flex-col items-center justify-center">
        <h1 className="text-2xl">Hii , {authuser?.username}</h1>
          <h1 className="text-xl">Select Any User and Start Chat</h1>
        </div>
      )}
    </>
  );
};

export default Message;
