import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
// }
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // const newItem = {
      //     id: nanoid(),
      //     name: action.payload,
      // }
      // state.cartItems.push(newItem)
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;   // to use in components.
export default cartSlice.reducer;  // to aware the redux store.

export const selectTotalPrice = (state) => {
  return state.cart.reduce((total, item) => total + item.price, 0);
};