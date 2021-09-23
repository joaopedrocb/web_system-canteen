// dependencies
import React from "react";

// css
import "./styles.css";


import {Link} from 'react-router-dom'

export default function ResponsiblePresentation(props) {
  const { cpf, name, phoneNumber, email, studentsEnrollment } = props;

  function renderEnrollmentList() {
    return studentsEnrollment.map((item) => {
      return <li className="enrollment">{item}</li>;
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
      <span>{renderEnrollmentList()}</span>

      <Link replace to="../gerenciamento/responsaveis/alterar"><div className="management-button"/></Link>
    </div>
  );
}
