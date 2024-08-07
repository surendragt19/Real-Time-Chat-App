import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authuser: null,
    otherUsers: null,
    selectedUser: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authuser = action.payload;
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { setAuthUser, setOtherUsers, setSelectedUser } =
  userSlice.actions;
export default userSlice.reducer;
