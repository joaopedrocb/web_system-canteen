// dependencies
import React from 'react';

// presentation
import { InsertProductPresentational } from './presentation'

export function InsertProduct(props) {
  const { productsList, changeProductsList, createProductModalIsActive } = props;

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

  function onSubmit() {
    const error = codeAlreadyExists() || nameAlreadyExists();

    if (!error) {
      changeProductsList(prevProductList => {
        return [
          ...prevProductList,
            {
              type: productType,
              code,
              name,
              price,
              ingredients: ['Farinha de trigo', 'Ovo'],
            }
        ]
      });

      createProductModalIsActive(false);
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
      onSubmit,

      createProductModalIsActive,
  })
}