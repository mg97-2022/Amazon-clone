import { createSlice } from "@reduxjs/toolkit";

const cartLaterSlice = createSlice({
  name: "later",
  initialState: {
    cartLater: [],
  },
  reducers: {
    addToLater(state, action) {
      state.cartLater.push(action.payload);
    },
    removeFormLater(state, action) {
      const newItems = state.cartLater.filter(
        (item) => item.id !== action.payload
      );
      state.cartLater = newItems;
    },
  },
});

export const cartLaterActions = cartLaterSlice.actions;
export default cartLaterSlice.reducer;
