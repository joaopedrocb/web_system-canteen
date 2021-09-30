// dependencies
import React from "react";

// presentation
import StudentsPagePresentation from "./presentation";

export function StudentsPage({ studentsList, userData, changeStudentsList }) {

  const [insertStudentModalIsActive, setInsertStudentModalIsActive] = React.useState(false);

  return React.createElement(StudentsPagePresentation, {
    studentsList,
    userData,
    updateStudents: changeStudentsList,

    insertStudentModalIsActive,
    setInsertStudentModalIsActive
  });
}
