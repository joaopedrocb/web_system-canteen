// dependencies
import React from "react";

// template
import { ManagementTemplate } from "../templates";

// components
import { DepositItem } from "./components";

import { depositStatement } from "../../common/domain";

// css
import "./styles.css";

export function DepositsPage() {
  
  return (
    <ManagementTemplate>
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
    </ManagementTemplate>
  );
}


