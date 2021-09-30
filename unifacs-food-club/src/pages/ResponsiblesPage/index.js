// dependencies
import React from "react";

// presentation
import ResponsiblesPagePresentation from "./presentation";

export function ResponsiblesPage({
  responsiblesList,
  userData,
  updateResponsibles,
}) {

  const [insertResponsibleModalIsActive, setInsertResponsibleModalIsActive] = React.useState(false);

  return React.createElement(ResponsiblesPagePresentation, {
    responsiblesList,
    userData,
    updateResponsibles,

    insertResponsibleModalIsActive, 
    setInsertResponsibleModalIsActive,

  });
}
