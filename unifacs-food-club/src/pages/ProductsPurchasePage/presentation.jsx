// dependencies
import React from "react";

// components
import { ProductPurchase } from "./components";

// css
import "./styles.css";

function ProductsPurchasePagePresentation(props) {

  return (
    <>
      <div className="purchase-products-list">
        {props?.productsList?.map((product) => {
          const {
            ingredients,
            isBlocked,
            name,
            picture,
            price,
            code,
          } = product;

          return (
            <ProductPurchase
              key={name + price.toString()}
              code={code}
              ingredients={ingredients}
              isBlocked={isBlocked}
              name={name}
              picture={picture}
              price={price}
              onPurchase={props.onPurchase}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductsPurchasePagePresentation;
