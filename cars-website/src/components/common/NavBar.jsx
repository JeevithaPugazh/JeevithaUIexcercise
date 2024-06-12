import React from "react";

import "../../styles/NavBar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="nav-bar-container">
        <div>
          <img src="\images\logo.png" alt="Logo" />
        </div>
        <Link to={"/cart"}>
          <div className="shoppingCart">
            <ShoppingCartIcon />

            <div className="cart-number">1</div>
          </div>
        </Link>
      </div>
    </>
  );
};
