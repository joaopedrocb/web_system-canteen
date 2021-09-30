// dependencies
import React from "react";
import { Link } from "react-router-dom";

// components
import { Responsible } from "./components";

import { InsertResponsible } from "./components/InsertResponsible";

import { Modal } from "../../components";

// css
import "./styles.css";

export default function ResponsiblesPagePresentation({
  responsiblesList,
  userData,
  updateResponsibles,

  insertResponsibleModalIsActive,
  setInsertResponsibleModalIsActive,

}) {
  return (
    <>
      <div className="create-responsible-button-container">
        <button
          onClick={() => setInsertResponsibleModalIsActive(true)}
          className="create-responsible-button"
        >
          Adicionar responsável
        </button>
      </div>

      <Modal isVisible={insertResponsibleModalIsActive}>
        <InsertResponsible
          responsiblesList={responsiblesList}
          updateResponsibles={updateResponsibles}
          setInsertResponsibleModalIsActive={setInsertResponsibleModalIsActive}
        />
      </Modal>

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
          const { cpf, name, phoneNumber, email, studentsEnrollment = [] } =
            responsible;

          return (
            <Responsible
              cpf={cpf}
              name={name}
              phoneNumber={phoneNumber}
              email={email}
              studentsEnrollment={studentsEnrollment}
              updateResponsibles={updateResponsibles}
            />
          );
        })}
      </div>
    </>
  );
}
