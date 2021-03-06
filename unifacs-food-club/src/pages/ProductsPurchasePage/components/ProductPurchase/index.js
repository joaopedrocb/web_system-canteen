// dependencies
import React from "react";

// presentation
import ProductPurchasePresentation from "./presentation";

export function ProductPurchase(props) {
  const { ingredients, isBlocked, name, picture, price, onPurchase, code } = props;

  const [buyProductModalActive, setBuyProductModalIsActive] =
    React.useState(false);

  return React.createElement(ProductPurchasePresentation, {
    ingredients,
    isBlocked,
    name,
    picture,
    price,
    onPurchase,
    code,

    buyProductModalActive,
    setBuyProductModalIsActive,
  });
}
