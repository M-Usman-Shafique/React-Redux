import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "../Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
);