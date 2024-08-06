import React from "react";
import SendInputMsg from "./SendInputMsg";
import AllMessages from "./AllMessages";

const Message = () => {
  return (
    <>
      <div className="md:min-w-[550px] flex flex-col">
        <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2">
          <div>
            <div className="w-12 rounded-full">
              <img
                src="https://avatar.iran.liara.run/public/boy?username=meghna@gmail.com"
                alt="user-profile"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between gap-2">
              <p>Ram</p>
            </div>
          </div>
        </div>
        <AllMessages/>
        <SendInputMsg/>
      </div>
     
    </>
  );
};

export default Message;
