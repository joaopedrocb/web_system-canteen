// dependencies
import React from 'react';

// presentation
import { UpdateProductPresentational } from './presentation'

// api
import { post } from '../../../../../../common/main/infra';

export function UpdateProduct(props) {
  const { product, fetchProductsList, changeUpdateProductModalIsActive } = props;


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

  async function onSubmit() {
    const payload = new FormData();

    payload.set('type', product.type);
    payload.set('name', name);
    payload.set('price', Number(price));
    payload.set('ingredients', ingredients);

    await post(`/food_club_api/public_html/api/product/${product.code}`,  { data: payload }).then(() => {
      changeUpdateProductModalIsActive(false);
      fetchProductsList();
    });      
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