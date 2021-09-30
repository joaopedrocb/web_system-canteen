// dependencies
import React from "react";

// presentation
import StudentsPagePresentation from "./presentation";

export function StudentsPage({ studentsList, userData, changeStudentsList }) {
  return React.createElement(StudentsPagePresentation, {
    studentsList,
    userData,
    changeStudentsList,
  });
}
