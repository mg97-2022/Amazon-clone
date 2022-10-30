import { createSlice } from "@reduxjs/toolkit";

const fetchedProductsSlice = createSlice({
  name: "fetchedProducts",
  initialState: {
    fetchedProducts: [],
    sortProducts: "all",
  },
  reducers: {
    fetchProducts(state, action) {
      state.fetchedProducts = action.payload;
    },
    sortProducts(state, action) {
      state.sortProducts = action.payload;
    },
  },
});

export const fetchedProductsActions = fetchedProductsSlice.actions;

export default fetchedProductsSlice.reducer;
