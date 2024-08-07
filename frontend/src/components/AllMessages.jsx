import React from "react";
import SingleMeggages from "./SingleMeggages";
import useGetAllMessage from "../customHook/useGetAllMessage";
import { useSelector } from "react-redux";

const AllMessages = () => {
  useGetAllMessage();
  const { messages } = useSelector((store) => store.message);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {
        messages && messages.map((message) => (
          <SingleMeggages key={message._id} message={message} />
        ))
      }
    </div>
  );
};

export default AllMessages;
