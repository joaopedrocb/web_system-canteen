// dependencies
import React from "react";

import { Modal } from "../../../../components";
import { UpdateStudent } from "../UpdateStudent";
import { InsertBalance } from "../InsertBalance";

// css
import "./styles.css";

export default function StudentPresentation(props) {
  const {
    enrollment,
    studentClass,
    shift,
    name,
    phoneNumber,
    email,
    responsibleCpf,
    balance,

    updateStudents,
    updateStudentModalActive,
    setUpdateStudentModalActive,

    insertBalanceModalActive,
    setInsertBalanceModalIsActive,
  } = props;

  const student = {
    enrollment,
    studentClass,
    shift,
    name,
    phoneNumber,
    email,
    responsibleCpf,
    balance,
  };

  return (
    <div id="student">
      <span className="student-id">{enrollment}</span>

      <span className="student-id">{studentClass}</span>

      <span className="student-id">{shift.label}</span>
      <span className="student-name">{name}</span>
      <span className="student-id">{phoneNumber}</span>
      <span className="student-id">{email}</span>
      <span className="student-id">{responsibleCpf}</span>
      <span className="student-id">{balance}</span>

      <Modal isVisible={updateStudentModalActive}>
        <UpdateStudent
          student={student}
          updateStudents={updateStudents}
          setUpdateResponsibleModalIsActive={setUpdateStudentModalActive}
        />
      </Modal>

      <Modal isVisible={insertBalanceModalActive}>
        <InsertBalance
          student={student}
          updateStudents={updateStudents}
          setInsertBalanceModalIsActive={setInsertBalanceModalIsActive}
        />
      </Modal>

      <div style={{ display: "flex", gridGap: "10px" }}>
        <div
          onClick={() => setUpdateStudentModalActive(true)}
          className="management-button"
        />
        <div
          onClick={() => setInsertBalanceModalIsActive(true)}
          className="management-button deposite"
        />
      </div>
    </div>
  );
}
