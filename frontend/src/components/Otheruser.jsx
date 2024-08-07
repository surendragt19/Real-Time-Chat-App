import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const Otheruser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);

  const selectUserHandler = () => {
    dispatch(setSelectedUser(user));
  };

  return (
    <>
      <div
        onClick={selectUserHandler}
        className={`${
          selectedUser && selectedUser._id === user._id ? "bg-white" : ""
        } flex gap-2 hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer`}
      >
        <div>
          <div className="w-12 rounded-full">
            <img src={user.profilePhoto} alt="user-profile" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>{user.fullname}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Otheruser;
