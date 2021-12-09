// dependencies
import React from "react";

// components
import { ProductPurchase } from "./components";

// css
import "./styles.css";

function ProductsPurchasePagePresentation(props) {
  const { productsList } = props;

  return (
    <>
      <div className="purchase-products-list">
        {productsList?.map((product) => {
          const {
            ingredients,
            isBlocked,
            name,
            picture,
            price,
          } = product;

          return (
            <ProductPurchase
              key={name + price.toString()}
              ingredients={ingredients}
              isBlocked={isBlocked}
              name={name}
              picture={picture}
              price={price}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductsPurchasePagePresentation;
