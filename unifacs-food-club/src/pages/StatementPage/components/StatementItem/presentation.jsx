// dependencies
import React from "react";

// css
import "./styles.css";

function StatementItemPresentation(props) {
  const { date, productName, value, studentEnrollment } = props;

    return (
      <div id="purchase-product">
        <div className="product-data">
          <span className="product-name">{productName}</span>
        </div>

        <span className="product-price">{date}</span>
        

        <span className="product-price">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(value)}
        </span>

        <span className="product-price">#{studentEnrollment}</span>

     
      </div>
    );
  

}

export default StatementItemPresentation;
