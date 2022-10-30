import { createSlice } from "@reduxjs/toolkit";

const signMessageSlice = createSlice({
  name: "message",
  initialState: {
    signMessage: true,
  },
  reducers: {
    hideMessage(state) {
      state.signMessage = false;
    },
  },
});

export const signMessageActions = signMessageSlice.actions;
export default signMessageSlice.reducer;
