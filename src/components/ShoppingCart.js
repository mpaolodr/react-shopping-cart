import React, { useContext } from "react";

//Context Object
import { CartContext } from "../contexts/CartContext";

// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  //useContext on Context object
  const cart = useContext(CartContext);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.item.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map(item => (
        <Item key={item.id} {...item} />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
