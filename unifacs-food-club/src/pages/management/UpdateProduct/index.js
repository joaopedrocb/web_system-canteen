import { UpdateProductPresentational } from './presentation'
import React from 'react';
import { LocalStorageAdapter } from '../../../infra'
import { PRODUCTS_LIST } from '../../../constants/domain/storageKeys';
import { ProductType } from '../../../enums';

export function UpdateProduct(product) {
  const storage = new LocalStorageAdapter()

  const productsList = storage.getItem(PRODUCTS_LIST);

  const [name, setName] = React.useState(product.name);

  function onNameInputChange(event) {
    setName(event?.target?.value);
  }

  const [price, setPrice] = React.useState(product.price);

  function onPriceInputChange(event) {
    setPrice(event?.target?.value);
  }
  const [provider, setProvider] = React.useState(product.provider);

  function onProviderInputChange(event) {
    setProvider(event?.target?.value);
  }

  const [ingredients, setIngredients] = React.useState(product.ingredients);

  function onIngredientsInputChange(event) {
    setIngredients(event?.target?.value);
  }

  function nameAlreadyExists() {
    const nameAlreadyExists =  productsList.some(product => {
      return product.name.toUpperCase() === name.toLocaleUpperCase()
    })

    if (nameAlreadyExists) {
      alert('Já existe um produto com este nome.')
      return nameAlreadyExists
    }

    return nameAlreadyExists
  }

  function onSubmit() {
    const error =  nameAlreadyExists();
    
    if (!error) {

      const updatedProduct = {
        type: product.productType,
        code: product.code,
        name,
        //@TODO: Adicionar cadastro de imagem
        // picture,
        price,
        isBlocked: product.isBlocked,
        ingredients,
        provider,
      }
      
      const updatedIndex = productsList.findIndex(item => item.code === product.code)

      const newList = productsList[updatedIndex] = updatedProduct;

      console.log(newList)

      storage.setItem(PRODUCTS_LIST, [...newList])
      return;
    }
  }

  return React.createElement(UpdateProductPresentational, {
      product,

      onNameInputChange,
      onPriceInputChange,
      onProviderInputChange,
      onIngredientsInputChange,
      onSubmit
  })
}