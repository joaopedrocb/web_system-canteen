// dependencies
import React from "react";

// template
import { ManagementTemplate } from "../templates";

// components
import { Product } from "./components";

// css
import "./styles.css";

// infra
import { LocalStorageAdapter } from "../../infra";

// data
import { LOGGED_USER } from "../../constants";
import { AccessLevel } from "../../enums";

function ProductsPagePresentation(props) {
  const { productsList } = props;

  function renderCreateProductButton() {
    const storage = new LocalStorageAdapter();
    const loggedUser = storage.getItem(LOGGED_USER);
    if (loggedUser.accessLevel.id !== AccessLevel.STAFF.id) {
      return null;
    }
    return (
      <div className="create-product-button-container">
        <button className="create-product-button">Criar Produto</button>
      </div>
    );
  }

  return (
    <ManagementTemplate>
      {renderCreateProductButton()}
      <div className="productsList">
        <div className="list-header">
          <span>Nome</span>
          <span>Código</span>
          <span>Tipo</span>
          <span>Fornecedor</span>
          <span>Ingredientes</span>
          <span>Valor</span>
          <div style={{ width: "30px" }} />
        </div>

        {productsList.map((product) => {
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
            />
          );
        })}
      </div>
    </ManagementTemplate>
  );
}

export default ProductsPagePresentation;
