import { createSlice } from "@reduxjs/toolkit";

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    productDetails: {},
  },
  reducers: {
    getProductDetails(state, action) {
      state.productDetails = action.payload;
    },
  },
});

export const productDetailsActions = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
