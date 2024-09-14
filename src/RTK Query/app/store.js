import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from '../services/product.js'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productApi.reducerPath]: productApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling & other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors. It takes an optional callback as the 2nd arg for customization.
setupListeners(store.dispatch)