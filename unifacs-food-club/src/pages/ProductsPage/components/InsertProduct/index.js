// dependencies
import React from 'react';

// presentation
import { InsertProductPresentational } from './presentation';

// api
import { post } from '../../../../common/main/infra';

export function InsertProduct(props) {
  const { productsList, fetchProductsList, createProductModalIsActive } = props;

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
    const formattedPrice = event?.target?.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    setPrice(formattedPrice);
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

    if (codeAlreadyExists && code !== '') {
      alert('Já existe um produto com este código.');
    }

    return codeAlreadyExists;
  }

  function nameAlreadyExists() {
    const nameAlreadyExists =  productsList.some(product => {
      return product.name.toUpperCase() === name.toLocaleUpperCase();
    });

    if (nameAlreadyExists && name !== '') {
      alert('Já existe um produto com este nome.');
    }

    return nameAlreadyExists;
  }

  async function onSubmit() {
    const error = codeAlreadyExists() || nameAlreadyExists();

    if (error) {
      return;
    }

    const payload = new FormData();

    payload.set('type', productType);
    payload.set('code', Number(code));
    payload.set('name', name);
    payload.set('price', price);

    if (!!ingredients) {
      payload.set('ingredients', ingredients);
    }

    if (!!provider) {
      payload.set('provider', provider);
    }
    

    await post('food_club_api/public_html/api/product', { data: payload }).then(() => {
      createProductModalIsActive(false);
      fetchProductsList();
    });
  }

  return React.createElement(InsertProductPresentational, {
      productType,
      buttonIsDisabled,

      price,

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