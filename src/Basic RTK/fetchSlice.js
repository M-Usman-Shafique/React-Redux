import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});

const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    isLoading: false,
    data: null,
    error: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default fetchSlice.reducer;