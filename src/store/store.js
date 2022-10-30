import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import cartLaterReducer from "./cartLater";
import fetchedProductsReducer from "./fetchedProducts";
import productDetailsReducer from "./productDetails";
import searchBarReducer from "./searchBar";
import userReducer from "./user";
import signMessageReducer from "./signMessage";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartLater: cartLaterReducer,
    fetchedProducts: fetchedProductsReducer,
    productDetails: productDetailsReducer,
    searchBar: searchBarReducer,
    user: userReducer,
    signMessage: signMessageReducer,
  },
});

export default store;
