// dependencies
import React from 'react';
import { ProductType } from '../../../enums';

// css
import './styles.css';

export function UpdateProductPresentational(props) {
    const { 
      product,
      onNameInputChange,
      onPriceInputChange,
      onProviderInputChange,
      onIngredientsInputChange,
      onSubmit
    } = props;

    const { productType } = product;

    function renderIngredientsInput() {
      if (productType === ProductType.FOOD.id.toString()) {
        return <input placeholder="Ingredientes" defaultValue={product.ingredients} onChange={onIngredientsInputChange} />
      }
      return null;
    }

    function renderProviderInput() {
      if (productType === ProductType.BEVERAGE.id.toString()) {
        return <input placeholder="Fornecedor" onChange={onProviderInputChange} defaultValue={product.provider} />
      }
      return null;
    }

    return (
        <main id="update-product-page">
          <section class="update-product-page_section">
              <span class="update-product-page_section-title">Editar produto</span>
      

              <form class="update-product-page_section-form">
                <input placeholder="Nome do produto" defaultValue={product.name} onChange={onNameInputChange} />
                <input placeholder="Preço do produto" defaultValue={product.price} onChange={onPriceInputChange} />
                
                {renderProviderInput()}
                {renderIngredientsInput()}
                  
              </form>

              <footer class="update-product-page_section-footer">
                  <button onClick={onSubmit}>Editar</button>
              </footer>
          </section>
        </main>
    )
}
