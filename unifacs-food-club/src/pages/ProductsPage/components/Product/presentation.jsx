// dependencies
import React from "react";

// css
import "./styles.css";

// enums
import { ProductTypeEnum, AccessLevelEnum } from '../../../../common/domain';

// local components
import { UpdateProduct, BlockProduct, DeleteProduct } from './components';

// external components
import { Modal } from '../../../../components';

function ProductPresentation(props) {
  const {
    code,
    ingredients,
    isBlocked,
    name,
    price,
    type,
    provider,
    accessLevel,
    productsList,
    changeProductsList,

    updateProductModalIsActive,
    setUpdateProductModalIsActive,

    blockProductModalIsActive,
    setBlockProductModalIsActive,

    deleteProductModalIsActive, 
    setDeleteProductModalIsActive
  } = props;

  function renderProductType() {
    if (type.id === ProductTypeEnum.BEVERAGE.id) {
        return 'Bebida';
    }

    return 'Comida';
  }

  function renderIngredients() {
    if (!ingredients) {
      return "-";
    }

    return ingredients.map((ingredient) => {
      return <li className="ingredient">{ingredient}</li>;
    });
  }

  function renderUpdateProductButton() {
    if (accessLevel?.id !== AccessLevelEnum.STAFF.id) {
      return null;
    }

    return (
        <div className="management-button" onClick={() => setUpdateProductModalIsActive(true)}/>
    );
  }

  function renderDeleteProductButton() {
    if (accessLevel?.id !== AccessLevelEnum.STAFF.id) {
      return null;
    }

    return (
      <div className="delete-product-button" onClick={() => {setDeleteProductModalIsActive(true)}} />
    )
  }

  function renderProduct() {
    if (isBlocked) {
      return (
        <div id="produc" className="isBlockedProducts">
          <div className="product-data">
            <div className="product-image"></div>
            <span className="product-name">{name}</span>
          </div>

          <span className="product-id">#{code}</span>

          <span>{renderProductType()}</span>

          <span>{provider || "-"}</span>

          <span>{renderIngredients()}</span>

          <span className="product-price">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </span>

          <Modal isVisible={updateProductModalIsActive}>
            <UpdateProduct
              product={{
                code,
                ingredients,
                isBlocked,
                name,
                price,
                type,
                provider,
                accessLevel,
              }}
              productsList={productsList}
              changeProductsList={changeProductsList}
              changeUpdateProductModalIsActive={setUpdateProductModalIsActive}
            />
          </Modal>

          <Modal isVisible={blockProductModalIsActive}>
            <BlockProduct
              accessLevel={accessLevel}
              setBlockProductModalIsActive={setBlockProductModalIsActive}
              isBlocked={isBlocked}
            />
          </Modal>

          <Modal isVisible={deleteProductModalIsActive}>
              <DeleteProduct setDeleteProductModalIsActive={setDeleteProductModalIsActive}/>
          </Modal>

          <div className="product-buttons-container">
            {renderUpdateProductButton()}

            <div className="block-button" onClick={() => {setBlockProductModalIsActive(true)}} />

            {renderDeleteProductButton()}
          </div>
        </div>
      );
    }

    return (
      <div id="product">
        <div className="product-data">
          <div className="product-image"></div>
          <span className="product-name">{name}</span>
        </div>

        <span className="product-id">#{code}</span>

        <span>{renderProductType()}</span>

        <span>{provider || "-"}</span>

        <span>{renderIngredients()}</span>

        <span className="product-price">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>


        <Modal isVisible={updateProductModalIsActive}>
            <UpdateProduct
              product={{
                code,
                ingredients,
                isBlocked,
                name,
                price,
                type,
                provider,
                accessLevel,
              }}
              productsList={productsList}
              changeProductsList={changeProductsList}
              changeUpdateProductModalIsActive={setUpdateProductModalIsActive}
            />
          </Modal>


          <Modal isVisible={blockProductModalIsActive}>
            <BlockProduct
              accessLevel={accessLevel}
              setBlockProductModalIsActive={setBlockProductModalIsActive}
              isBlocked={isBlocked}
            />
          </Modal>

          <Modal isVisible={deleteProductModalIsActive}>
              <DeleteProduct setDeleteProductModalIsActive={setDeleteProductModalIsActive}/>
          </Modal>

          <div className="product-buttons-container">
            {renderUpdateProductButton()}

            <div className="block-button" onClick={() => {setBlockProductModalIsActive(true)}} />

            {renderDeleteProductButton()}
          </div>
      </div>
    );
  }

  return renderProduct();
}

export default ProductPresentation;
