import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import themeReducer from "../features/theme/themeSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,   // 'counter' has become the official product of redux store, so, place this exact word in your components to use it.
    theme: themeReducer,      // 'theme' is also official product of redux store, available globally.
  },
});
