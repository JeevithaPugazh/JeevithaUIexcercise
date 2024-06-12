import React, { useEffect, useState } from "react";
import { getCar } from "../../utils/Api";
import { useParams } from "react-router-dom";
import "../../styles/ProductDetails.css";
import { BackToHome } from "../common";
import { Button } from "@mui/material";

export const ProductDetails = (props) => {
  const [product, setProduct] = useState(null);
  const addCart = () => {
    props.setCartItems([...props.cartItems, product]);
  };
  const removeCart = () => {
    props.setCartItems(props.cartItems.filter((c) => c.id !== product.id));
  };
  const params = useParams();

  useEffect(() => {
    console.log(params);
    getCar(params.id).then((car) => {
      setProduct(car);
    });
  }, []);

  return (
    <div className="product-page">
      {product != null ? (
        <>
          <BackToHome />

          <div className="product-details">
            <img alt={product.car} src={product.image} />
            <div className="product">
              <div className="product-name">{product.car}</div>
              <div className="product-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
              <div className="details">
                <div>
                  <strong>Model:</strong>
                  {product.car_model}
                </div>

                <div>
                  <strong>Color:</strong>
                  {product.car_color}
                </div>

                <div>
                  <strong>Year:</strong>
                  {product.car_model_year}
                </div>

                <div>
                  <strong>Price:</strong>
                  {product.price}
                </div>

                <div>
                  <strong>Availability:</strong>
                  {product.availability ? "Available" : "Not Available"}
                </div>
              </div>
              {props.cartItems.includes(product) ? (
                <Button className="btn-remove" onClick={removeCart}>
                  Remove from Cart
                </Button>
              ) : (
                <Button className="btn-add" onClick={addCart}>
                  Add to cart
                </Button>
              )}
            </div>
          </div>
        </>
      ) : (
        <>Loding...</>
      )}
    </div>
  );
};
