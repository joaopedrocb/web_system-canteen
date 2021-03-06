// dependencies
import React from "react";

// components
import { Modal } from "../../../../components";
import { UpdateStudent } from "../UpdateStudent";
import { InsertBalance } from "../InsertBalance";
import { DeleteStudent } from '../DeleteStudent'

// css
import "./styles.css";

export default function StudentPresentation(props) {
  const {
    student,
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

    deleteStudentModalIsActive,
    setDeleteStudentModalIsActive,

    fetchStudentsList,
  } = props;

  function renderShift() {
    if (shift === '1') {
      return 'Matutino'
    }

    return 'Vespertino'
  }

  return (
    <div id="student">
      <span className="student-id">{enrollment}</span>

      <span className="student-id">{studentClass}</span>

      <span className="student-id">{renderShift()}</span>
      <span className="student-name">{name}</span>
      <span className="student-id">{phoneNumber}</span>
      <span className="student-id">{email}</span>
      <span className="student-id">{responsibleCpf}</span>
      <span className="student-id">R$ {balance}</span>

      <Modal isVisible={updateStudentModalActive}>
        <UpdateStudent
          student={student}
          updateStudents={updateStudents}
          setUpdateResponsibleModalIsActive={setUpdateStudentModalActive}
          fetchStudentsList={fetchStudentsList}
        />
      </Modal>

      <Modal isVisible={insertBalanceModalActive}>
        <InsertBalance
          student={student}
          updateStudents={updateStudents}
          setInsertBalanceModalIsActive={setInsertBalanceModalIsActive}
          fetchStudentsList={fetchStudentsList}
        />
      </Modal>

      <Modal isVisible={deleteStudentModalIsActive}>
        <DeleteStudent
          setDeleteStudentModalIsActive={setDeleteStudentModalIsActive}
          enrollment={enrollment}
          fetchStudentsList={fetchStudentsList}
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

        <div
          onClick={() => setDeleteStudentModalIsActive(true)}
          className="delete-student-button"
        />
      </div>
    </div>
  );
}
