// dependencies
import React from "react";

// local components
import { Product } from "./components";

// external components
import { Modal } from '../../components';

// css
import "./styles.css";

// enums
import { AccessLevelEnum } from '../../common/domain';

function ProductsPagePresentation(props) {
  const {  
    userData, 
    productsList, 
    changeProductsList,

    createProductModalIsActive,
    setCreateProductModalIsActive,
  } = props;

  function renderCreateProductButton() {
    if (userData.accessLevel?.id !== AccessLevelEnum.STAFF.id) {
      return null;
    }

    return (
        <button
          onClick={() => setCreateProductModalIsActive(true)}
          className="create-product-button"
        >
          Criar Produto
        </button>
    );
  }

  return (
    <>
    <div className="products-page_header">
      <span>Produtos</span>
      
      {renderCreateProductButton()}
    </div>

    <Modal isVisible={createProductModalIsActive}>
      <div>
        teste
      </div>
    </Modal>

      <div className="productsList">
        <div className="list-header-products">
          <span>Nome</span>
          <span>Código</span>
          <span>Tipo</span>
          <span>Fornecedor</span>
          <span>Ingredientes</span>
          <span>Valor</span>
          <div style={{ width: "30px" }} />
        </div>

        {productsList && productsList.map((product) => {
          const {
            code,
            ingredients,
            isBlocked,
            name,
            picture,
            price,
            type,
            provider,
          } = product;

          return (
            <Product
              code={code}
              ingredients={ingredients}
              isBlocked={isBlocked}
              name={name}
              picture={picture}
              price={price}
              type={type}
              provider={provider}
              accessLevel={accessLevel}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductsPagePresentation;
