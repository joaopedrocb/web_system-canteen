// dependencies
import React from "react";

// css
import "./styles.css";

export default function DepositItemPresentation(props) {
  const { date, studentName, value, studentEnrollment } = props;

    return (
      <div id="purchase-product">
        <div className="product-data">
          <span className="product-name">{studentName}</span>
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


