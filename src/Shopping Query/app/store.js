import { configureStore, createSlice } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import cartReducer from "../slices/cartSlice"
import { productApi } from '../services/product.js'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

setupListeners(store.dispatch)
