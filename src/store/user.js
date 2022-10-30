import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userToken: "",
    userEmail: ''
  },
  reducers: {
    getUserToken(state, action) {
      state.userToken = action.payload;
    },
    getUserEmail(state, action) {
      state.userEmail = action.payload
    }
  },
});

export const userActions = userSlice.actions

export default userSlice.reducer