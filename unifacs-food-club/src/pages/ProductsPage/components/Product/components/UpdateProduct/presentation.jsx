// dependencies
import React from 'react';

// css
import './styles.css';

// external components
import { CloseButton } from '../../../../../../components';

export function UpdateProductPresentational(props) {
    const { 
      changeUpdateProductModalIsActive,
      product,
      name,
      price,
      ingredients,

      onNameInputChange,
      onPriceInputChange,
      onProviderInputChange,
      onIngredientsInputChange,
      onSubmit
    } = props;

    const buttonIsDisabled = !name || !price || !ingredients;

    function renderButton() {
      if (buttonIsDisabled) {
        return <button type="button" className="buttonIsDisabled">Editar</button>;
      }

      return <button onClick={onSubmit}>Editar</button>
    }

    return (
      <>
        <main id="update-product-page">
          <div className="close-button-container">
            <CloseButton onClick={() => changeUpdateProductModalIsActive(false)}/>
          </div>

          <section class="update-product-page_section">
              <span class="update-product-page_section-title">Editar produto</span>

            <div>
              <span class="insert-product-page_section-subtitle">Selecione o tipo de produto:</span>

              <div className="product-type-selector-container">
                  <div>
                    <input 
                      type="radio" 
                      id="productType1"
                      name="productType" 
                      value={1} 
                      defaultChecked 
                    />

                    <label for="productType1">Comida</label>
                  </div>

                  <div>
                    <input 
                      type="radio"
                      id="productType2"
                      name="productType" 
                      value={2} 
                    />
                    <label for="productType2">Bebida</label>
                  </div>
                </div>

              </div>
      
              <form class="update-product-page_section-form">
                <input placeholder="Nome do produto" defaultValue={product.name} onChange={onNameInputChange} />
                <input placeholder="Preço do produto" defaultValue={product.price} onChange={onPriceInputChange} />
                <input placeholder="Ingredientes" defaultValue={product.ingredients} onChange={onIngredientsInputChange} />
              </form>

              <footer class="update-product-page_section-footer">
                {renderButton()}
              </footer>
          </section>
        </main>
      </>
    )
}
