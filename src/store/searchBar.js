import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    enteredValue: "",
  },
  reducers: {
    getEnteredValue(state, action) {
      state.enteredValue = action.payload;
    },
  },
});

export const searchBarActions = searchBarSlice.actions

export default searchBarSlice.reducer
