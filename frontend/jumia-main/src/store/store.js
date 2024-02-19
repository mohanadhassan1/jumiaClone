import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/products";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
