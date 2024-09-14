import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './products.css'
import { removeItem } from './cartSlice';

function Cart() {
    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch();
  return (
    <div className="card-list">
        {cartItems && cartItems.map((item, i) => (
            <div key={i} className="card">
                <img src={item.image} className="img-pro"/>
                <h4>{item.price}$</h4>
                <button onClick={() => dispatch(removeItem(i))}>Remove</button>
            </div>
        ))}
    </div>
  )
}

export default Cart