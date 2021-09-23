// dependencies
import React from "react";

// css
import "./styles.css";

function ProductPurchasePresentation(props) {
  const { ingredients, isBlocked, name, price } = props;

  function renderIngredients() {
    if (!ingredients) {
      return "-";
    }

    return ingredients.map((ingredient) => {
      return <li className="ingredient">{ingredient}</li>;
    });
  }

  function renderProduct() {
    if (isBlocked) {
      return (
        <div id="produc" className="isBlocked">
          <div className="product-data">
            <div className="product-image"></div>
            <span className="product-name">{name}</span>
          </div>

          <span>{renderIngredients()}</span>

          <span className="product-price">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </span>

          <div className="purchase-button-container">
          <button className="purchase-button">Comprar</button>
        </div>
        </div>
      );
    }

    return (
      <div id="purchase-product">
        <div className="product-data">
          <div className="product-image"></div>
          <span className="product-name">{name}</span>
        </div>

        <span>{renderIngredients()}</span>

        <span className="product-price">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>

        <div className="purchase-button-container">
          <button className="purchase-button">Comprar</button>
        </div>
      </div>
    );
  }

  return renderProduct();
}

export default ProductPurchasePresentation;
