import { createSlice } from "@reduxjs/toolkit";
let nextId = 1;

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, cartId: nextId++ });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.cartId !== action.payload,
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
