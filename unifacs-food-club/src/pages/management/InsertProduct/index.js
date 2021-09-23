// dependencies
import React from 'react';
import { useHistory } from 'react-router-dom'

import { InsertProductPresentational } from './presentation'
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

  const buttonIsDisabled = React.useMemo(() => {
    return (ingredients === '' && provider === '') ||
            price === '' ||
            name  === '' ||
            code === '' ||
            !productType;
  },[code, ingredients, name, price, productType, provider])

  function codeAlreadyExists() {
    const codeAlreadyExists = productsList.some(product => {
      return product.code === parseFloat(code)
    })

    if (codeAlreadyExists && name !== '') {
      alert('Já existe um produto com este código.')
      return codeAlreadyExists;
    }

    return codeAlreadyExists;
  }

  function nameAlreadyExists() {
    const nameAlreadyExists =  productsList.some(product => {
      return product.name.toUpperCase() === name.toLocaleUpperCase()
    })

    if (nameAlreadyExists) {
      alert('Já existe um produto com este nome.' && name !== '')
      return nameAlreadyExists;
    }

    return nameAlreadyExists;
  }

const history = useHistory();


  function onSubmit() {
    const error = codeAlreadyExists() || nameAlreadyExists();
    
    if (!error) {

      const newList = [...productsList, {
        type: productType === 1 ? ProductType.FOOD : ProductType.BEVERAGE,
        code,
        name,
        price,
        isBlocked: true,
        ingredients,
        provider,
      }]

      storage.setItem(PRODUCTS_LIST, [...newList]);
      history.push('/gerenciamento/produtos');
      return;
    }
  }

  return React.createElement(InsertProductPresentational, {
      productType,
      buttonIsDisabled,

      onProductTypeInputChange,
      onCodeInputChange,
      onNameInputChange,
      onPriceInputChange,
      onProviderInputChange,
      onIngredientsInputChange,
      onSubmit
  })
}