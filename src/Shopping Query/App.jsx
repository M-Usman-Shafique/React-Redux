import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <FooterWrapper />
    </BrowserRouter>
  );
}


function FooterWrapper() {
  const location = useLocation();
  const showFooter = location.pathname === '/'; // Adjust this condition to your specific route

  return showFooter ? <Footer /> : null;
}

export default App;