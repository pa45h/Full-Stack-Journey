import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

store.subscribe(() => {
  localStorage.setItem("cartProduct", JSON.stringify(store.getState().cart));
});
