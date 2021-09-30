// dependencies
import React from "react";

// components
import { StatementItem } from "./components";

import { purchaseHistoric } from "../../common/domain";

// css
import "./styles.css";

export function StatementPage() {

  const [statementCanBeVisible, setStatementCanBeVisible] = React.useState(false);

  function renderContent() {
    if (!statementCanBeVisible) {
      return (
        <div className="choose-student">
          <form className="block-product-form">
            <div className="choose-students-header">
              <label>Selecione o aluno:</label>

              <input name="students" id="students-id" list="studentsList" autoComplete/>
            </div>

              <button className="choose-student-select" onClick={() => setStatementCanBeVisible(true)}>Selecionar</button>
          </form>

          <datalist id="studentsList">
              <option>144171032</option>
              <option>1441710354</option>
              <option>144171036</option>
          </datalist>
        </div>
        );
    }
    
    return (
      <>
        <div className="products-page_header">
          <span>Extrato de Consumo</span>

          <button onClick={() => setStatementCanBeVisible(false)} className="choose-student-button">Selecionar aluno</button>
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

  return renderContent();
}


