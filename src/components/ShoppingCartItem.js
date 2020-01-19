import React from "react";

const Item = ({ item }) => {
  return (
    <div className="shopping-cart_item">
      <img src={item.image} alt={`${item.title} book`} />

      <div>
        <h1>{item.title}</h1>
        <p>$ {item.price}</p>
        <button>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
