// dependencies
import React from "react";

// css
import "./styles.css";

// components
import { DeleteResponsible } from './components'
import { UpdateResponsible } from '../../components/UpdateResponsible'
import { Modal } from "../../../../components";

// enums
import { AccessLevelEnum } from "../../../../common/domain";

export default function ResponsiblePresentation(props) {
  const {
    userData,
    cpf,
    name,
    phoneNumber,
    email,
    login,
    password,
    studentsEnrollment,

    updateResponsibles,
    
    updateResponsibleModalIsActive,
    setUpdateResponsibleModalIsActive,

    deleteResponsibleModalIsActive,
    setDeleteResponsibleModalIsActive,
  } = props;

  console.log(userData)

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

  function renderDeleteButton() {
    if (userData?.accessLevel?.id === AccessLevelEnum.STAFF.id) {
      return (
        <div className="delete-button" onClick={() => setDeleteResponsibleModalIsActive(true)}/>
      );
    }

    return null;
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

      <Modal isVisible={deleteResponsibleModalIsActive}>
        <DeleteResponsible setDeleteResponsibleModalIsActive={setDeleteResponsibleModalIsActive} />
      </Modal>

      <div className="buttons-container">
        <div
          onClick={() => setUpdateResponsibleModalIsActive(true)}
          className="management-button"
        />
        {renderDeleteButton()}
      </div>
    </div>
  );
}
