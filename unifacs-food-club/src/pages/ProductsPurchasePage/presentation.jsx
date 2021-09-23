// dependencies
import React from "react";

// template
import { ManagementTemplate } from "../templates";

// components
import { ProductPurchase } from "./components";

// css
import "./styles.css";

function ProductsPurchasePagePresentation(props) {
  const { productsList } = props;

  return (
    <ManagementTemplate>
      <div className="productsList">
        <div className="purchase-list-header">
          <span>Nome</span>
          <span>Ingredientes</span>
          <span>Valor</span>
          <div style={{ width: "30px" }} />
        </div>

        {productsList.map((product) => {
          const {
            ingredients,
            isBlocked,
            name,
            picture,
            price,
          } = product;

          return (
            <ProductPurchase
              ingredients={ingredients}
              isBlocked={isBlocked}
              name={name}
              picture={picture}
              price={price}
            />
          );
        })}
      </div>
    </ManagementTemplate>
  );
}

export default ProductsPurchasePagePresentation;
