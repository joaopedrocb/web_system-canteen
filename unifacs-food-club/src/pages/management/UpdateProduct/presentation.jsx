// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// emums
import { ProductType } from '../../../enums';

// css
import './styles.css';

// template
import { ManagementTemplate } from '../../templates';

export function UpdateProductPresentational(props) {
    const { 
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
        return <button type="button" className="buttonIsDisabled">Entrar</button>;
      }

      return <button onClick={onSubmit}>Editar</button>
    }

    return (
      <ManagementTemplate>
        <main id="update-product-page">
        <Link replace to="/gerenciamento/produtos" className="backToProducts">
            <span >Voltar para produtos</span> 
          </Link>

          <section class="update-product-page_section">
              <span class="update-product-page_section-title">Editar produto</span>
      

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
      </ManagementTemplate>
    )
}
