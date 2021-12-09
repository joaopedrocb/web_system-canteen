// dependencies
import React from "react";

// components
import { Responsible } from "./components";

import { InsertResponsible } from "./components/InsertResponsible";

import { Modal } from "../../components";

// css
import "./styles.css";

export default function ResponsiblesPagePresentation({
  responsiblesList,
  userData,

  insertResponsibleModalIsActive,
  setInsertResponsibleModalIsActive,
  fetchResponsiblesList,
}) {
  return (
    <>

      <div className="products-page_header">
      <span>Responsáveis</span>
      
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
          setInsertResponsibleModalIsActive={setInsertResponsibleModalIsActive}
          fetchResponsiblesList={fetchResponsiblesList}
        />
      </Modal>

      <div className="responsiblesList">
        <div className="list-header">
          <span>Nome</span>
          <span>CPF</span>
          <span>Telefone</span>
          <span>Email</span>
          <span></span>
          <div style={{ width: "30px" }} />
        </div>

        {responsiblesList.map((responsible) => {
          const { cpf, name, phone_number, email, studentsEnrollment = [], login, password } =
            responsible;

          return (
            <Responsible
              key={cpf.toString()}
              cpf={cpf}
              name={name}
              phoneNumber={phone_number}
              email={email}
              studentsEnrollment={studentsEnrollment}
              userData={userData}
              login={login}
              password={password}
              fetchResponsiblesList={fetchResponsiblesList}
            />
          );
        })}
      </div>
    </>
  );
}
