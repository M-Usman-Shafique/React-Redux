import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: 'products',
        method: 'GET'
      })
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: 'GET'
      })
    }),
    getProductsByLimit: builder.query({
      query: (num) => ({
        url: `products?limit=${num}`,
        method: 'GET'
      })
    }),
  }),
});
export const { useGetAllProductsQuery, useGetProductByIdQuery, useGetProductsByLimitQuery } = productApi
