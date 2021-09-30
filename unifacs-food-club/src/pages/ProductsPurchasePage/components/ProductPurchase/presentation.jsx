// dependencies
import React from "react";

// css
import "./styles.css";

import { BuyProduct } from "../BuyProduct";

import { Modal } from "../../../../components/Modal";

function ProductPurchasePresentation(props) {
  const {
    ingredients,
    isBlocked,
    name,
    price,
    buyProductModalActive,
    setBuyProductModalIsActive,
  } = props;

  function renderIngredients() {
    if (!ingredients) {
      return "-";
    }

    return ingredients.map((ingredient) => {
      return <li className="ingredient">{ingredient}</li>;
    });
  }

  function renderProduct() {
    return (
      <div className="product-item">
        <div className="product-photo"/>

        <div className="informations-container">
          <span>Nome: {name}</span>

          <span>
            Ingredientes: {renderIngredients()}
          </span>

          <span>Preço: {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price)}
          </span>
        </div>

        <div className="purchase-button-container">
          <button className="purchase-button">Adicionar ao carrinho</button>
        </div>
      </div>
    )
  }

  return renderProduct();
}

export default ProductPurchasePresentation;
