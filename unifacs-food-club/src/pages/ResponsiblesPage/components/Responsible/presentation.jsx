// dependencies
import React from "react";

// css
import "./styles.css";

export default function ResponsiblePresentation(props) {
  const { cpf, name, phoneNumber, email, studentsEnrollment } = props;

  function renderEnrollmentList() {
    return studentsEnrollment.map((item) => {
      return <span>{item}</span>;
    });
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

      <div className="management-button" />
    </div>
  );
}
