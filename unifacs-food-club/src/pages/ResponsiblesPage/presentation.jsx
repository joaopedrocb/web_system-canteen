// dependencies
import React from "react";
import { Link } from "react-router-dom";

// template
import { ManagementTemplate } from "../templates";

// components
import { Responsible } from "./components";

// css
import "./styles.css";

export default function ResponsiblesPagePresentation(props) {
  const { responsiblesList } = props;

  return (
    <ManagementTemplate>
      <Link to="/gerenciamento/responsaveis/adicionar">
        <div className="create-responsible-button-container">
          <button className="create-responsible-button">
            Adicionar responsável
          </button>
        </div>
      </Link>

      <div className="responsiblesList">
        <div className="list-header">
          <span>Nome</span>
          <span>CPF</span>
          <span>Telefone</span>
          <span>Email</span>
          <span>Alunos</span>
          <div style={{ width: "30px" }} />
        </div>

        {responsiblesList.map((responsible) => {
          const { cpf, name, phoneNumber, email, studentsEnrollment } =
            responsible;

          return (
            <Responsible
              cpf={cpf}
              name={name}
              phoneNumber={phoneNumber}
              email={email}
              studentsEnrollment={studentsEnrollment}
            />
          );
        })}
      </div>
    </ManagementTemplate>
  );
}
