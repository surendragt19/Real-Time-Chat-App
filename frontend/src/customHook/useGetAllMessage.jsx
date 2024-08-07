import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMessages } from "../redux/messageSlice";

const useGetAllMessage = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (!selectedUser) {
          console.log("No selected user");
          return;
        }

        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8000/api/msg/${selectedUser._id}`
        );
        console.log("API Response: ", res.data);
        if (Array.isArray(res.data)) {
          dispatch(setMessages(res.data));
        } else {
          console.error("Unexpected response format:", res.data);
        }
      } catch (error) {
        console.error("Error fetching messages: ", error);
      }
    };

    fetchMessages();
  }, [dispatch, selectedUser]);
};

export default useGetAllMessage;
