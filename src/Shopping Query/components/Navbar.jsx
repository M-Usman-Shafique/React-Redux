import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalPrice } from '../slices/cartSlice'
import { Link } from "react-router-dom"


function Navbar() {
  const cartItem = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotalPrice)
  return (
      <div className="nav_bar sticky-top">
        <Link to="/" className="left" style={{textDecoration: 'none', color: 'white'}}>
          <h2 className="title">ShopHub</h2>
        </Link>
        <div className="middle">
          <button className="btn btn-warning total" style={{fontWeight: 'bold', fontSize: 22, borderRadius: 10}}>
            Total Price = {totalPrice}$
          </button>
        </div>
        <Link to="/cart" className="right">
          <button type="button" className="cart position-relative">
            <span className="material-symbols-outlined cart-icon">shopping_cart</span>
            <span className="position-absolute top-0 start-200 translate-middle badge rounded-pill bg-danger">
              {cartItem.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
  );
}

export default Navbar;
