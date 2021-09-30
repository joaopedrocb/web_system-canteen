// dependencies
import { Link } from "react-router-dom";
import React from "react";

// components
import { Student } from "./components";

// css
import "./styles.css";

export default function StudentsPagePresentation(props) {
  const { studentsList } = props;

  return (
    <>
      <Link to="/gerenciamento/alunos/adicionar">
        <div className="create-student-button-container">
          <button className="create-student-button">Adicionar aluno</button>
        </div>
      </Link>

      <div className="studentsList">
        <div className="list-header-students">
          <span>Matrícula</span>
          <span>Turma</span>
          <span>Turno</span>
          <span>Nome</span>
          <span>Telefone</span>
          <span>Email</span>
          <span>CPF do responsável</span>
          <span>Saldo</span>
          <div style={{ width: "30px" }} />
        </div>

        {studentsList.map((student) => {
          const {
            enrollment,
            studentClass,
            shift,
            name,
            phoneNumber,
            email,
            responsibleCpf,
            balance,
          } = student;

          return (
            <Student
              enrollment={enrollment}
              studentClass={studentClass}
              shift={shift}
              name={name}
              phoneNumber={phoneNumber}
              email={email}
              responsibleCpf={responsibleCpf}
              balance={balance}
            />
          );
        })}
      </div>
    </>
  );
}
