import { InsertProductPresentational } from './presentation'
import React from 'react';
import { LocalStorageAdapter } from '../../../infra'
import { PRODUCTS_LIST } from '../../../constants/domain/storageKeys';
import { ProductType } from '../../../enums';

export function InsertProduct() {
  const storage = new LocalStorageAdapter()

  const productsList = storage.getItem(PRODUCTS_LIST);

  const [productType, setProductType] = React.useState('');

  function onProductTypeInputChange(event) {
    setProductType(event?.target?.value);
  }
  
  const [code, setCode] = React.useState('');

  function onCodeInputChange(event) {
    setCode(event?.target?.value);
  }
  
  const [name, setName] = React.useState('');

  function onNameInputChange(event) {
    setName(event?.target?.value);
  }

  const [price, setPrice] = React.useState('');

  function onPriceInputChange(event) {
    setPrice(event?.target?.value);
  }
  const [provider, setProvider] = React.useState('');

  function onProviderInputChange(event) {
    setProvider(event?.target?.value);
  }

  const [ingredients, setIngredients] = React.useState('');

  function onIngredientsInputChange(event) {
    setIngredients(event?.target?.value);
  }

  function codeAlreadyExists() {
    const codeAlreadyExists = productsList.some(product => {
      return product.code === parseFloat(code)
    })

    if (codeAlreadyExists) {
      alert('Já existe um produto com este código.')
      return codeAlreadyExists
    }

    return codeAlreadyExists
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
    const error = codeAlreadyExists() || nameAlreadyExists();
    
    if (!error) {

      const newList = [...productsList, {
        type: productType === 1 ? ProductType.FOOD : ProductType.BEVERAGE,
        code,
        name,
        //@TODO: Adicionar cadastro de imagem
        // picture,
        price,
        isBlocked: true,
        ingredients,
        provider,
      }]

      storage.setItem(PRODUCTS_LIST, [...newList])
      return;
    }
  }

  return React.createElement(InsertProductPresentational, {
      productType,

      onProductTypeInputChange,
      onCodeInputChange,
      onNameInputChange,
      onPriceInputChange,
      onProviderInputChange,
      onIngredientsInputChange,
      onSubmit
  })
}