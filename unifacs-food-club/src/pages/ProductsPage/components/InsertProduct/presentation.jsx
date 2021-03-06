// dependencies
import React from 'react';

// enums
import { ProductTypeEnum } from '../../../../common/domain';

// css
import './styles.css';

// external components
import { CloseButton } from '../../../../components';

export function InsertProductPresentational(props) {
    const { 
      productType,
      buttonIsDisabled,

      price,

      onProductTypeInputChange,
      onCodeInputChange,
      onNameInputChange,
      onPriceInputChange,
      onProviderInputChange,
      onIngredientsInputChange,
      onSubmit ,

      createProductModalIsActive
    } = props;

    function renderButton() {
      if (buttonIsDisabled) {
          return <button type="button" className="buttonIsDisabled">Cadastrar</button>;
      }

      return <button onClick={onSubmit}>Cadastrar</button>
  }

    function renderIngredientsInput() {
      if (productType === ProductTypeEnum.FOOD.id.toString()) {
        return <input placeholder="Ingredientes" onChange={onIngredientsInputChange} />
      }

      return null;
    }

    function renderProviderInput() {
      if (productType === ProductTypeEnum.BEVERAGE.id.toString()) {
        return <input placeholder="Fornecedor" onChange={onProviderInputChange} />
      }

      return null;
    }

    return (
      <>
        <main className="insert-product">
          <div className="close-button-container">
            <CloseButton onClick={() => createProductModalIsActive(false)} />
          </div>

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
                <input placeholder="C??digo do produto" onChange={onCodeInputChange} />
                <input placeholder="Nome do produto" onChange={onNameInputChange} />
                <input placeholder="Pre??o do produto" onChange={onPriceInputChange} value={price}/>
                
                {renderProviderInput()}
                {renderIngredientsInput()}
                  
              </form>

              <footer class="insert-product-page_section-footer">
                  {renderButton()}
              </footer>
          </section>
        </main>
      </>
    )
}
