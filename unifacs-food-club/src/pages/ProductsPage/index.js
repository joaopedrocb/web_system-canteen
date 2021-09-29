// dependencies
import React from "react";

// presentation
import ProductsPagePresentation from "./presentation";


export function ProductsPage(props) {
  const { userData, productsList, changeProductsList } = props;

  const [createProductModalIsActive, setCreateProductModalIsActive] = React.useState(false);

  return React.createElement(ProductsPagePresentation, { 
    userData, 
    productsList, 
    changeProductsList, 

    createProductModalIsActive,
    setCreateProductModalIsActive,
  });
}
