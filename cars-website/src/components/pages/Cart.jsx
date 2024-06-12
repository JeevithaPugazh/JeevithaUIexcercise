import { React, useState } from "react";
import "../../styles/Cart.css";

export const Cart = ({ cartItems, setCartItems }) => {
  const [total, setTotal] = useState(0);
  return (
    <>
      <h1 className="cart-heading">Cart Product</h1>
      <div className="cart-container">
        {cartItems.map((item) => (
          <div className="cart-product" key={item.id}>
            <div className="img">
              <img src={item.image} alt={item.car} />
            </div>
            <div className="product-details">
              <h3>{item.car}</h3>
              <p>Price: {item.price}</p>
              <p>Model: {item.car_model}</p>
              <p>Color: {item.car_color}</p>
            </div>
          </div>
        ))}
        <h2 className="cart-amount">Total Amount Rs: {total}</h2>
      </div>
    </>
  );
};
