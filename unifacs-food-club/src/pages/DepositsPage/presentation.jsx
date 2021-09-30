// dependencies
import React from "react";

// components
import { DepositItem } from "./components";

import { depositStatement } from "../../common/domain";

// css
import "./styles.css";

export function DepositsPage() {

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
          <span>Extrato de Depósitos</span>

          <button onClick={() => setStatementCanBeVisible(false)} className="choose-student-button">Selecionar aluno</button>
        </div>
  
        <div className="statement">
          <div className="statement-header">
            <span>Nome do aluno</span>
            <span>Data</span>
            <span>Valor do depósito</span>
            <span>Matricula do aluno</span>
            <div style={{ width: "30px" }} />
          </div>
  
          {depositStatement.map((purchase) => {
            const { date, studentName, value, studentEnrollment } = purchase;
  
            return (
              <DepositItem
                date={date}
                studentName={studentName}
                value={value}
                studentEnrollment={studentEnrollment}
              />
            );
          })}
        </div>
      </>
    );
  }

  return renderContent()
}


