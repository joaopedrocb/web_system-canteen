import React from "react";

import { BuyProductPresentational } from "./presentation";

export function BuyProduct({
  ingredients,
  name,
  price,
  setBuyProductModalIsActive,
}) {
  function onSubmit() {
    alert(`${name} comprado no valor de R$ ${price}, obrigado!`);
    setBuyProductModalIsActive(false);
  }

  return React.createElement(BuyProductPresentational, {
    ingredients,
    name,
    price,

    onSubmit,

    setBuyProductModalIsActive,
  });
}
