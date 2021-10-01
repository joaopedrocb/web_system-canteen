// dependencies
import React from "react";

// css
import "./styles.css";

function ProductPurchasePresentation(props) {
  const {
    ingredients,
    isBlocked,
    name,
    price,
  } = props;

  function renderIngredients() {
    if (!ingredients) {
      return "-";
    }

    return ingredients.map((ingredient) => {
      return <li className="ingredient">{ingredient}</li>;
    });
  }

  function renderBlockedProduct() {
    if (isBlocked) {
      return <div className="blocked-product-to-purchase"/>
    }

    return null;
  }

  function renderProduct() {
    return (
      <div className="product-item">

        {renderBlockedProduct()}

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
