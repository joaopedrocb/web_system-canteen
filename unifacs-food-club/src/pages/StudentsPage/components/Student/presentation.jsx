// dependencies
import React from "react";

// css
import "./styles.css";

export default function StudentPresentation(props) {
  const {
    enrollment,
    studentClass,
    shift,
    name,
    phoneNumber,
    email,
    responsibleCpf,
    balance,
  } = props;

  return (
    <div id="student">
      <div className="student-data">
        <span className="student-name">{name}</span>
      </div>
      <span className="student-id">{enrollment}</span>
      <span className="student-id">{studentClass}</span>
      <span className="student-id">{shift.label}</span>
      <span className="student-id">{phoneNumber}</span>
      <span className="student-id">{email}</span>
      <span className="student-id">{responsibleCpf}</span>
      <span className="student-id">{balance}</span>

      <div className="management-button" />
    </div>
  );
}
