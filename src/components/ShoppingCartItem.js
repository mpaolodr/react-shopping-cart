import React, { useContext } from "react";

//Context Object
import { CartContext } from "../contexts/CartContext";

const Item = ({ item }) => {
  /*
	NOT NECESSARY, I COULD HAVE JUST PASSED REMOVEITEM FUNCTION AS PROP FROM SHOPPINGCART BUT FOR THE SAKE OF PRACTICE, 
	USE USECONTEXT
  
	*/

  const { removeItem } = useContext(CartContext);

  return (
    <div className="shopping-cart_item">
      <img src={item.image} alt={`${item.title} book`} />

      <div>
        <h1>{item.title}</h1>
        <p>$ {item.price}</p>
        <button onClick={() => removeItem(item.id)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
