import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, selectCartItems, removeFromCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cancel from '../img/cancel.png'
import Empty from '../img/empty.png'
import '../components/Cart.css'

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from cart!", {
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
    <>
      <ToastContainer />
      <div
        className="container text-center my-5"
        style={{ width: "700px", height: 200}}
      >
        {cartItems.length === 0 && (
          <div className="empty-box">
            <h2 className="empty-text">Cart is Empty !!</h2>
           <div className="icon-box">
           <img src={Empty} className="empty"/>
           </div>
            <Link to="/" className="btn my-4 continue" style={{fontWeight: 'bold'}}>
              Continue Shopping?
            </Link>
          </div>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className="container"my-5>
            <div className="card mb-3 text-center" style={{ minWidth: "650px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="p-3">
                    <img
                      src={item.images[0]}
                      className="img-fluid rounded-start"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body my-2">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text my-3">{item.description}</p>
                    <div className="extra d-flex justify-content-center">
                      <button className="price mx-4">
                        {item.price} ₹
                      </button>
                      <button className="buy">Buy Now</button>
                    </div>
                  </div>
                  <div onClick={() => handleRemoveFromCart(item.id)} className="cut">
                    <img src={Cancel} className="img-cut"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <button
            onClick={() => {
              dispatch(clearCart());
              toast.success("Cart Cleared!", {
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
            }}
            className="clear btn btn-danger my-5"
            style={{height: 50, fontSize: '22px', fontWeight: 'bold'}}
          >
            Clear Cart
          </button>
        )}
      </div>
    </>
  );
}

export default Cart;