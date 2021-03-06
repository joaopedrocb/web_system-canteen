// dependencies
import React from "react";

// presentation
import StudentPresentation from "./presentation";

export function Student(props) {
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
    fetchStudentsList,
    student,
  } = props;

  const [updateStudentModalActive, setUpdateStudentModalActive] =
    React.useState(false);

  const [insertBalanceModalActive, setInsertBalanceModalIsActive] =
    React.useState(false);

  const [deleteStudentModalIsActive, setDeleteStudentModalIsActive] = 
    React.useState(false);

  return React.createElement(StudentPresentation, {
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
  });
}

