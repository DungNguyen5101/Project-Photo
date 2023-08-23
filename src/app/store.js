import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/cartSlide";

const rootReducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
