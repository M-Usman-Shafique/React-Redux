import { createSlice } from "@reduxjs/toolkit";

const getInitialCartState = () => {
  const items = JSON.parse(localStorage.getItem('cartItems')) || [];
  const totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;
  return {
    items,
    totalPrice
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialCartState(),
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalPrice += newItem.price;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      localStorage.removeItem('cartItems');
      localStorage.removeItem('totalPrice');
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      state.totalPrice = state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalPrice -= existingItem.price;
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
      }
    }
  }
});

export const {
  addToCart,
  clearCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;

export const selectCartItems = state => state.cart.items;
export const selectCartTotalPrice = state => state.cart.totalPrice;

export default cartSlice.reducer;
