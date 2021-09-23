// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// enums
import { ProductType } from '../../../enums';

// css
import './styles.css';

// template
import { ManagementTemplate } from '../../templates';

export function InsertProductPresentational(props) {
    const { 
      productType,
      buttonIsDisabled,

      onProductTypeInputChange,
      onCodeInputChange,
      onNameInputChange,
      onPriceInputChange,
      onProviderInputChange,
      onIngredientsInputChange,
      onSubmit
    } = props;

    function renderButton() {
      if (buttonIsDisabled) {
          return <button type="button" className="buttonIsDisabled">Cadastrar</button>;
      }

      return <button onClick={onSubmit}>Cadastrar</button>
  }

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
      <ManagementTemplate>
        <main id="insert-product-page">
          <Link replace to="/gerenciamento/produtos" className="backToProducts">
            <span >Voltar para produtos</span> 
          </Link>

          <section class="insert-product-page_section">
              <span class="insert-product-page_section-title">Cadastrar um novo produto</span>
              <div>
                <span class="insert-product-page_section-subtitle">Selecione o tipo de produto:</span>

                <div className="product-type-selector-container">
                  <div>
                    <input type="radio" id="productType1"
                    name="productType" value={1} onChange={onProductTypeInputChange}/>
                    <label for="productType1">Comida</label>
                  </div>

                  <div>
                    <input type="radio" id="productType2"
                    name="productType" value={2} onChange={onProductTypeInputChange}/>
                    <label for="productType2">Bebida</label>
                  </div>
                </div>
              </div>
              
                <div style={({display: 'flex', flexDirection: 'column', gridGap: '15px'})}>
                  <span>Imagem do produto</span>
                  <input  type="file" accept="images.png"/>
                </div>

              <form class="insert-product-page_section-form">
                <input placeholder="Código do produto" onChange={onCodeInputChange} />
                <input placeholder="Nome do produto" onChange={onNameInputChange} />
                <input type="number" placeholder="Preço do produto" onChange={onPriceInputChange} />
                
                {renderProviderInput()}
                {renderIngredientsInput()}
                  
              </form>

              <footer class="insert-product-page_section-footer">
                  {renderButton()}
              </footer>
          </section>
        </main>
      </ManagementTemplate>
    )
}
