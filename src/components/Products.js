import React from "react";

//contexts
import { ProductContext } from "../contexts/ProductContext";

// Components
import Product from "./Product";

const Products = () => {
  return (
    //   render props syntax
    <ProductContext.Consumer>
      {({ products, addItem }) => {
        return (
          <div className="products-container">
            {products.map(product => {
              return (
                <Product key={product.id} product={product} addItem={addItem} />
              );
            })}
          </div>
        );
      }}
    </ProductContext.Consumer>
  );
};

export default Products;

//  {/* <div className="products-container">
//       {props.products.map(product => (
//         <Product key={product.id} product={product} addItem={props.addItem} />
//       ))}
//     </div>  */}

/*
if using useContext:

const {products, addItem} = useContext(ProductContext);





*/
