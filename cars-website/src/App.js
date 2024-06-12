import { React, useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./components/common";
import { Home, ProductDetails, Cart } from "./components/pages";
import { minPrices, maxPrices } from "./utils/Common";

import "./App.css";

const App = () => {
  const [carColors, setCarColors] = useState("");
  const [minPrice, setMinPrice] = useState(minPrices[0]);
  const [maxPrice, setMaxPrice] = useState(maxPrices[7]);
  const [minYear, setMinYear] = useState(1990);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());

  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState("");

  // useEffect(() => {
  //   console.log(filters);
  // }, [filters]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/card-details/:id"
            element={
              <ProductDetails
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cars={product}
                setCars={setProduct}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default App;
