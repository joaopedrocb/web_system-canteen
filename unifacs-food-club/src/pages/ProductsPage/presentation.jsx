// dependencies
import React from "react";
import { Link } from "react-router-dom";

// template
import { ManagementTemplate } from "../templates";

// components
import { Product } from "./components";

// css
import "./styles.css";

// infra
import { LocalStorageAdapter } from "../../infra";

// data
import { AccessLevel } from "../../enums";

import { ModalPresentational } from "../../modals/Modal";

import { InsertProduct } from "../management/InsertProduct";

function ProductsPagePresentation(props) {
  const { productsList, loggedUser } =
    props;

  const { accessLevel } = loggedUser;
  function renderCreateProductButton() {
    if (accessLevel.id !== AccessLevel.STAFF.id) {
      return null;
    }

    return (
      // <Link to="/gerenciamento/produtos/adicionar">
      <div className="create-product-button-container">
        <button
          className="create-product-button"
        >
          Criar Produto
        </button>
      </div>
      // </Link>
    );
  }

  function renderCreateProduct() {
    return (
      <ModalPresentational>
        <span>Nome</span>
      </ModalPresentational>
    );
  }

  return (
    <ManagementTemplate>
      {renderCreateProductButton()}
      {renderCreateProduct()}
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
              accessLevel={accessLevel}
            />
          );
        })}
      </div>
    </ManagementTemplate>
  );
}

export default ProductsPagePresentation;
