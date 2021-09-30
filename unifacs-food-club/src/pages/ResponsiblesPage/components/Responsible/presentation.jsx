// dependencies
import React from "react";

// css
import "./styles.css";

import { UpdateResponsible } from '../../components/UpdateResponsible'

import { Modal } from "../../../../components";

export default function ResponsiblePresentation(props) {
  const {
    cpf,
    name,
    phoneNumber,
    email,
    studentsEnrollment,
    login,
    password,

    updateResponsibleModalIsActive,
    setUpdateResponsibleModalIsActive,
    updateResponsibles,
  } = props;

  const responsible = {
    name,
    phone: phoneNumber,
    email,
    login,
    password,
  };
  function renderEnrollmentList() {
    return studentsEnrollment.map((item) => {
      return <span>{item}</span>;
    });
  }

  return (
    <div id="responsible">
      <div className="responsible-data">
        <span className="responsible-name">{name}</span>
      </div>
      <span className="responsible-id">{cpf}</span>
      <span className="responsible-id">{phoneNumber}</span>
      <span className="responsible-id">{email}</span>
      <div className="enrollment-list">{renderEnrollmentList()}</div>

      <Modal isVisible={updateResponsibleModalIsActive}>
        <UpdateResponsible
          responsible={responsible}
          updateResponsibles={updateResponsibles}
          setUpdateResponsibleModalIsActive={setUpdateResponsibleModalIsActive}
        />
      </Modal>

      <div
        onClick={() => setUpdateResponsibleModalIsActive(true)}
        className="management-button"
      />
    </div>
  );
}
