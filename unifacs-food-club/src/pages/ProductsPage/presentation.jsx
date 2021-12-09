// dependencies
import React from "react";

// local components
import { Product, InsertProduct } from './components';

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
    fetchProductsList,
  } = props;

  function renderCreateProductButton() {
    if (userData?.access_level !== AccessLevelEnum.STAFF.id) {
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

  const renderProductsList = React.useCallback(() => {
      const mappedProductsList = productsList?.map((product) => {
        
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
          accessLevel={userData?.access_level}
          productsList={productsList}
          changeProductsList={changeProductsList}
          fetchProductsList={fetchProductsList}
        />
      );
    });

    return mappedProductsList;
  }, [productsList, userData?.access_level, changeProductsList, fetchProductsList])

  return (
    <>
    <div className="products-page_header">
      <span>Produtos</span>
      
      {renderCreateProductButton()}
    </div>

    <Modal isVisible={createProductModalIsActive}>
      <InsertProduct 
        productsList={productsList}
        createProductModalIsActive={setCreateProductModalIsActive}
        fetchProductsList={fetchProductsList}
      />
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

        {renderProductsList()}
      </div>
    </>
  );
}

export default ProductsPagePresentation;
