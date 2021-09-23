// dependencies
import React from 'react';
import { ProductType } from '../../../enums';

// css
import './styles.css';

export function InsertProductPresentational(props) {
    const { 
      productType,

      onProductTypeInputChange,
      onCodeInputChange,
      onNameInputChange,
      onPriceInputChange,
      onProviderInputChange,
      onIngredientsInputChange,
      onSubmit
    } = props;

    function renderIngredientsInput() {
      if (productType === ProductType.FOOD.id.toString()) {
        return <input placeholder="Ingredientes" onChange={onIngredientsInputChange} />
      }
      return null;
    }

    function renderProviderInput() {
      if (productType === ProductType.BEVERAGE.id.toString()) {
        return <input placeholder="Fornecedor" onChange={onProviderInputChange} />
      }
      return null;
    }

    return (
        <main id="insert-product-page">
          <section class="insert-product-page_section">
              <span class="insert-product-page_section-title">Cadastrar um novo produto</span>
              <span class="insert-product-page_section-subtitle">Selecione o tipo de produto:</span>
              <hr />

              <input type="radio" id="productType1"
              name="productType" value={1} onChange={onProductTypeInputChange}/>
              <label for="productType1">Comida</label>
              

              <input type="radio" id="productType2"
              name="productType" value={2} onChange={onProductTypeInputChange}/>
              <label for="productType2">Bebida</label>
              

              <form class="insert-product-page_section-form">
                <input placeholder="Código do produto" onChange={onCodeInputChange} />
                <input placeholder="Nome do produto" onChange={onNameInputChange} />
                <input placeholder="Preço do produto" onChange={onPriceInputChange} />
                
                {renderProviderInput()}
                {renderIngredientsInput()}
                  
              </form>

              <footer class="insert-product-page_section-footer">
                  <button onClick={onSubmit}>Cadastrar</button>
              </footer>
          </section>
        </main>
    )
}
