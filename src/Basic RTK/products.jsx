import React, { useEffect } from "react";
import "./products.css";
import { addToCart } from "./cartSlice";
import { fetchData } from "./fetchSlice";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loader">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h1>Error fetching products</h1>
      </div>
    );
  }

  return (
    <div className="card-list">
      {data?.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} className="img-pro" alt={product.title} />
          <h5>{product.price}$</h5>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
