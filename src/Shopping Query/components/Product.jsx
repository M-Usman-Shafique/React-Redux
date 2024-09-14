import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../slices/cartSlice";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAllProductsQuery } from "../services/product";
import useLocalStorage from "../hooks/useLocalStorage";
import "./Product.css";

function Product() {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItems);
  const response = useGetAllProductsQuery();

  const [storedCartItems, setStoredCartItems] = useLocalStorage(
    "cartItems",
    cartItem
  );

  if (response.isLoading) {
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
          <div></div>
        </div>
      </div>
    );
  }
  if (response.isError) return <h1>{response.error.error}</h1>;

  const { data } = response;

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setStoredCartItems([...storedCartItems, item]);
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
          {data.products.map((item) => (
            <div key={item.id} className="container card-box col-md-4 my-3">
              <div
                className="card d-flex flex-wrap"
              >
                <div className="d-flex justify-content-center align-items-center">
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
      </div>
    </div>
  );
}

export default Product;
