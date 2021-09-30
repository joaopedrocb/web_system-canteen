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

          <div className="purchase-button-container"></div>
        </div>
      );
    }

    <Modal isVisible={buyProductModalActive}>
      <BuyProduct
        ingredients={ingredients}
        name={name}
        price={price}
        setBuyProductModalIsActive={setBuyProductModalIsActive}
      />
    </Modal>

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
          <button
            onClick={() => setBuyProductModalIsActive(true)}
            className="purchase-button"
          >
            Comprar
          </button>
        </div>
      </div>
    );
  }

  return renderProduct();
}

export default ProductPurchasePresentation;
