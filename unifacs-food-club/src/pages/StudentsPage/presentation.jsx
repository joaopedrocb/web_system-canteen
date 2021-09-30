// dependencies
import React from "react";

// components
import { Student } from "./components";

import { InsertStudent } from './components/InsertStudent';

import { Modal } from "../../components";

// css
import "./styles.css";

export default function StudentsPagePresentation({
  studentsList,
  updateStudents,
  insertStudentModalIsActive,
  setInsertStudentModalIsActive,
}) {
  return (
    <>
      <div className="products-page_header">
      <span>Alunos</span>

        <button
          onClick={() => setInsertStudentModalIsActive(true)}
          className="create-student-button"
        >
          Adicionar aluno
        </button>
      </div>

      <Modal isVisible={insertStudentModalIsActive}>
        <InsertStudent
          studentsList={studentsList}
          updateStudents={updateStudents}
          setInsertStudentModalIsActive={setInsertStudentModalIsActive}
        />
      </Modal>

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
              key={enrollment.toString()}
              enrollment={enrollment}
              studentClass={studentClass}
              shift={shift}
              name={name}
              phoneNumber={phoneNumber}
              email={email}
              responsibleCpf={responsibleCpf}
              balance={balance}
              updateStudents={updateStudents}
            />
          );
        })}
      </div>
    </>
  );
}
