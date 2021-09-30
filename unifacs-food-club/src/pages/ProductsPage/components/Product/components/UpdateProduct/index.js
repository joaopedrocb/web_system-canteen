// dependencies
import React from 'react';

// presentation
import { UpdateProductPresentational } from './presentation'

export function UpdateProduct(props) {
  const { product, productsList, changeProductsList, changeUpdateProductModalIsActive } = props;

  const [name, setName] = React.useState(product.name);

  function onNameInputChange(event) {
    setName(event?.target?.value);
  }

  const [price, setPrice] = React.useState(product.price);

  function onPriceInputChange(event) {
    setPrice(event?.target?.value);
  }

  const [ingredients, setIngredients] = React.useState(product.ingredients);

  function onIngredientsInputChange(event) {
    setIngredients(event?.target?.value);
  }

  function onSubmit() {
    let temporaryProductsList = productsList;

    const updatedProduct = {
      type: product.type.id,
      code: product.code,
      name,
      price,
      isBlocked: product.isBlocked,
      ingredients: product.ingredients,
      provider: product.provider,
    };

    const productIndex = productsList.findIndex(product => product.name === name);

    temporaryProductsList[productIndex] = updatedProduct;
    
    changeProductsList(temporaryProductsList);

    changeUpdateProductModalIsActive(false);
      
    return;
  }

  return React.createElement(UpdateProductPresentational, {
    changeUpdateProductModalIsActive,
    product,
    name,
    price,
    ingredients,

    onNameInputChange,
    onPriceInputChange,
    onIngredientsInputChange,
    onSubmit
  })
}