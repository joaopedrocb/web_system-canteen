// dependencies
import React from "react";

// presentation
import ResponsiblePresentation from "./presentation";

export function Responsible(props) {
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
  } = props;

  const [updateResponsibleModalIsActive, setUpdateResponsibleModalIsActive] =
    React.useState(false);

  const [deleteResponsibleModalIsActive, setDeleteResponsibleModalIsActive] = React.useState(false);

  return React.createElement(ResponsiblePresentation, {
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
  });
}
