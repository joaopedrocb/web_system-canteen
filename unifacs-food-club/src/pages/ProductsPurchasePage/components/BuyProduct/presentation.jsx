// dependencies
import React from "react";

// css
import "./styles.css";

export function BuyProductPresentational(props) {
  const {
    ingredients,
    name,
    price,

    onSubmit,

    setBuyProductModalIsActive,
  } = props;

  return (
    <>
      <span className="back" onClick={() => setBuyProductModalIsActive(false)}>
        Fechar
      </span>

      <main>
        <section class="buy-product-page_section">
          <span class="buy-product-page_section-title">Comprar produto</span>

          <div className="product-image"></div>

          <span class="buy-product-page_section-subtitle">
            {`Produto: ${name}`}
          </span>
          <span class="buy-product-page_section-subtitle">
            {`Ingredientes: ${ingredients}`}
          </span>
          <span class="buy-product-page_section-subtitle">
            {`Preço: R$ ${price}`}
          </span>

          <footer class="buy-product-page_section-footer">
            <button onClick={onSubmit}>Comprar</button>;
          </footer>
        </section>
      </main>
    </>
  );
}
