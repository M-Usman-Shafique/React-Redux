import { createSlice } from "@reduxjs/toolkit";

const getInitialCartState = () => {
  const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const totalPrice = storedItems.reduce((acc, item) => acc + item.price, 0);
  return {
    items: storedItems,
    totalPrice: totalPrice,
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialCartState(),
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalPrice += newItem.price;
      localStorage.setItem('cartItems', JSON.stringify(state.items)); // Store cart items in localStorage
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice)); // Store totalPrice in localStorage
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      localStorage.removeItem('cartItems'); // Remove cartItems from localStorage
      localStorage.removeItem('totalPrice'); // Remove totalPrice from localStorage
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price, 0);
      localStorage.setItem('cartItems', JSON.stringify(state.items)); // Update cart items in localStorage
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice)); // Update totalPrice in localStorage
    }
  }
});

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalPrice = (state) => state.cart.totalPrice;
export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;