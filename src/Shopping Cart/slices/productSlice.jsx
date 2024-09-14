// productSlice.jsx

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://dummyjson.com/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.products;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;