import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cartProduct")) || [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) =>
      state.filter((product) => product.id !== action.payload),
    clearCart: (state) => {
      localStorage.removeItem("cartProducts");
      return [];
    },
  },
});

export const { add, remove, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
