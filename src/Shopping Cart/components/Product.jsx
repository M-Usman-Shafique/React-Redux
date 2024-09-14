import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../slices/cartSlice";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchProducts } from "../slices/productSlice";
import "./Product.css";
import { current } from "@reduxjs/toolkit";

function Product() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { products, loading, error } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const pages = [];

  const totalPages = Math.ceil(products.length / productsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const lastIndexProduct = currentPage * productsPerPage;
  const firstIndexProduct = lastIndexProduct - productsPerPage;
  const currentPageProducts = products.slice(
    firstIndexProduct,
    lastIndexProduct
  );

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading === "pending") {
    return (
      <div className="h-full">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  if (error) return <h1>{error}</h1>;

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Item Added to Cart!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div>
      <ToastContainer />
      <div className="container special">
        <div className="row">
          {currentPageProducts.map((item, index) => (
            <div key={item.id} className="container card-box col-md-4 my-3">
              <div className="card d-flex flex-wrap">
                <div className="d-flex justify-content-center align-items-center img-box">
                  <img
                    src={item.images[0]}
                    className={`card-img-top ${index === 5 ? "small-img" : ""}`}
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <br />
                  <div className="d-flex justify-content-center">
                    <button className="price-btn">{item.price} $</button>
                    <button
                      className="buy-btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pages">
          <button onClick={handlePrev} disabled={currentPage === 1} className="page-btn">Prev</button>
          {pages.map((page, index) => {
            return (
              <button key={index} onClick={() => setCurrentPage(page)} className={`page-btn ${currentPage === page ? 'active' : ''}`}>
                {page}
              </button>
            );
          })}
          <button onClick={handleNext} disabled={currentPage === totalPages} className="page-btn">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
