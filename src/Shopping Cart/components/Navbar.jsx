import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectCartItems, selectCartTotalPrice } from '../slices/cartSlice'
import { Link } from "react-router-dom"

function Navbar() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const [showTotalPrice, setShowTotalPrice] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/cart") {
      setShowTotalPrice(totalItemCount > 0);
    } else if (location.pathname === "/" && totalItemCount > 0) {
      setShowTotalPrice(true);
      const timer = setTimeout(() => {
        setShowTotalPrice(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowTotalPrice(false);
    }
  }, [totalItemCount, location.pathname]);

  return (
    <div className="nav_bar sticky-top">
      <Link to="/" className="left" style={{textDecoration: 'none', color: 'white'}}>
        <h2 className="title">ShopHub</h2>
      </Link>
      {showTotalPrice && location.pathname !== "/cart" && (
        <div className="middle">
          <button className="btn btn-warning total" style={{fontWeight: 'bold', fontSize: 22, borderRadius: 10}}>
            Total Price = {totalPrice.toFixed(2)}$
          </button>
        </div>
      )}
      {location.pathname === "/cart" && totalItemCount > 0 && (
        <div className="middle">
          <button className="btn btn-warning total" style={{fontWeight: 'bold', fontSize: 22, borderRadius: 10}}>
            Total Price = {totalPrice.toFixed(2)}$
          </button>
        </div>
      )}
      <Link to="/cart" className="right">
        <button type="button" className="cart position-relative">
          <span className="material-symbols-outlined cart-icon">shopping_cart</span>
          <span className="badge rounded-pill bg-danger position-absolute top-0 start-200 translate-middle">
            {totalItemCount}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
