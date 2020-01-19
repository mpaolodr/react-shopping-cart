import React from "react";
import { NavLink } from "react-router-dom";

//Context Object
import { CartContext } from "../contexts/CartContext";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>

      <CartContext.Consumer>
        {cart => {
          return (
            <NavLink to="/cart">
              Cart <span>{cart.length}</span>
            </NavLink>
          );
        }}
      </CartContext.Consumer>
    </div>
  );
};

export default Navigation;
