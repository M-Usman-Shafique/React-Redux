import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice.js';
import fetchReducer from './fetchSlice.js';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        fetch: fetchReducer,
    }
})

export default store;