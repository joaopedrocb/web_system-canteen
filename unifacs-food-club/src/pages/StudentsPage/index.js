// dependencies
import React from "react";

// presentation
import StudentsPagePresentation from "./presentation";

// api
import { get } from '../../common/main/infra';

export function StudentsPage() {
  const userData = localStorage.getItem('userData');

  const [insertStudentModalIsActive, setInsertStudentModalIsActive] = React.useState(false);

  const [studentsList, setStudentsList] = React.useState([]);

  async function fetchStudentsList() { 
    const response = await get('/food_club_api/public_html/api/student');

    const { data } = response?.data;

    setStudentsList(data);
  }

  React.useEffect(() => {    
    fetchStudentsList();
  }, []);

  return React.createElement(StudentsPagePresentation, {
    studentsList,
    userData: JSON.parse(userData),

    insertStudentModalIsActive,
    setInsertStudentModalIsActive,

    fetchStudentsList,
  });
}
