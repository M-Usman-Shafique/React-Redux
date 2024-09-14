import React from 'react'
import './products.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectTotalPrice } from './cartSlice'

function Navbar() {
    const items = useSelector((state) => state.cart)   // cart reducer comes from the redux store.
    const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="navbar">
        <Link to={"/"} className="links">Home</Link>
        <h4>Items: {items.length}</h4>
        <h4>Total Price: ${totalPrice.toFixed(0)}</h4>
        <Link to={"/cart"} className="links">Cart</Link>
    </div>
  )
}

export default Navbar
