import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      const itemExistIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemExistIndex >= 0) {
        state.cart[itemExistIndex].quantity = action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFormCart(state, action) {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = [...newCart];
    },
    resetCart(state) {
      state.cart = []
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
