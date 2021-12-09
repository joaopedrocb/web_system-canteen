// dependencies
import React from "react";

// presentation
import ProductsPagePresentation from "./presentation";


export function ProductsPurchasePage({ productsList }) {
  return React.createElement(ProductsPagePresentation, { productsList });
}
