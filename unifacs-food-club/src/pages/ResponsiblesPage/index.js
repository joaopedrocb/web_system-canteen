// dependencies
import React from "react";

// presentation
import ResponsiblesPagePresentation from "./presentation";

// api
import { get } from '../../common/main/infra';

export function ResponsiblesPage() {
  const userData = localStorage.getItem('userData');

  const [insertResponsibleModalIsActive, setInsertResponsibleModalIsActive] = React.useState(false);

  const [responsiblesList, setResponsiblesList] = React.useState([]);

  async function fetchResponsiblesList() {
    const response = await get('food_club_api/public_html/api/responsible/');

    setResponsiblesList(response?.data?.data);
  }

  React.useEffect(() => fetchResponsiblesList(), []);

  return React.createElement(ResponsiblesPagePresentation, {
    responsiblesList,
    userData: JSON.parse(userData),

    insertResponsibleModalIsActive, 
    setInsertResponsibleModalIsActive,
    fetchResponsiblesList,

  });
}
