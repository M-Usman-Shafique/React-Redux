import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, selectCartItems, removeFromCart, increaseQuantity, decreaseQuantity } from "../slices/cartSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cancel from '../img/cancel.png';
import Empty from '../img/empty.png';
import Dec from '../img/dec.png'
import Inc from '../img/inc.png'
import '../components/Cart.css';

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
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
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
              <img src={Empty} className="empty" alt="Empty Cart" />
            </div>
            <Link to="/" className="btn my-4 continue">
              Continue Shopping?
            </Link>
          </div>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className="container">
            <div className="card mb-3 text-center" style={{minWidth: '650px'}}>
              <div className="row g-0">
                <div className="col-md-4 check">
                  <div className="px-3 my-0 py-0">
                    <img
                      src={item.images[0]}
                      className="img-fluid rounded-start"
                      alt={item.title}
                    />
                  </div>
                  <div className="quantity-box">
                  <div onClick={() => handleDecreaseQuantity(item.id)} className="dec-box">
                  <img src={Dec} alt="decrease" className="dec-img"/>
                  </div>
                    <div className="qty">{item.quantity}</div>
                  <div onClick={() => handleIncreaseQuantity(item.id)} className="inc-box">
                  <img src={Inc} alt="increase" className="inc-img"/>
                  </div>
                    </div>
                </div>
                <div className="col-md-8 card-set">
                  <div className="card-body my-2">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="extra d-flex justify-content-center">
                      <button className="price mx-4">
                        {item.price} $
                      </button>
                      <button className="buy">Buy Now</button>
                    </div>
                  </div>
                  <div onClick={() => handleRemoveFromCart(item.id)} className="delete">
                    <img src={Cancel} className="img-cut" alt="Remove Item" />
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
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });
            }}
            className="clear btn btn-danger my-5"
            style={{ height: 50, fontSize: '22px', fontWeight: 'bold' }}
          >
            Clear Cart
          </button>
        )}
      </div>
    </>
  );
}

export default Cart;
