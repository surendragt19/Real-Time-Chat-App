import axios from "axios";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const SendInputMsg = () => {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message); // Updated to store.message

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!msg.trim()) {
      return;
    }
    try {
      const res = await axios.post(
        `http://localhost:8000/api/msg/send/${selectedUser?._id}/`,
        { message: msg }, // key should match backend
        { withCredentials: true }
      );
      console.log(res);
      
      // Dispatch updated messages
      dispatch(setMessages([...messages, res.data.newMessage]));

      // Clear the input field
      setMsg("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Send a message..."
          className="border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white"
        />
        <button
          type="submit"
          className="absolute flex inset-y-0 end-0 items-center pr-4"
        >
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default SendInputMsg;
