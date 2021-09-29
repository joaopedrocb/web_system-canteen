// dependencies
import React from "react";
import { Link } from "react-router-dom";

// css
import "./styles.css";

// enums
import { ProductTypeEnum, AccessLevelEnum } from '../../../../common/domain';

function ProductPresentation(props) {
  const {
      code,
      ingredients,
      isBlocked,
      name,
      price,
      type,
      provider,
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
    if (AccessLevelEnum.id !== AccessLevelEnum.STAFF.id) {
      return null;
    }
    return (
      <Link replace to="../gerenciamento/produtos/alterar">
        <div className="management-button" />
      </Link>
    );
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

          {renderUpdateProductButton()}

          <div className="block-button" />
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

        {renderUpdateProductButton()}

        <div className="block-button" />
      </div>
    );
  }

  return renderProduct();
}

export default ProductPresentation;
