// dependencies
import React from "react";

// components
import { StatementItem } from "./components";

import { purchaseHistoric } from "../../common/domain";

// css
import "./styles.css";

export function StatementPage() {
  
  return (
    <>
      <div className="products-page_header">
        <span>Extrato de Consumo</span>
      </div>

      <div className="statement">
        <div className="statement-header">
          <span>Nome</span>
          <span>Data</span>
          <span>Valor</span>
          <span>Matricula do aluno</span>
          <div style={{ width: "30px" }} />
        </div>

        {purchaseHistoric.map((purchase) => {
          const { date, productName, value, studentEnrollment } = purchase;

          return (
            <StatementItem
              date={date}
              productName={productName}
              value={value}
              studentEnrollment={studentEnrollment}
            />
          );
        })}
      </div>
    </>
  );
}


