// dependencies
import React from "react";

// components
import { Student } from "./components";

import { InsertStudent } from './components/InsertStudent';

import { Modal } from "../../components";

// css
import "./styles.css";

export default function StudentsPagePresentation(props) {
  const {
    studentsList,
    updateStudents,
    insertStudentModalIsActive,
    setInsertStudentModalIsActive,
    fetchStudentsList,
  } = props;

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
          setInsertStudentModalIsActive={setInsertStudentModalIsActive}
          fetchStudentsList={fetchStudentsList}
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

        {studentsList && studentsList.map((student) => {
          const {
            enrollment,
            student_class,
            shift,
            name,
            phone_number,
            email,
            responsible_cpf,
            balance,
          } = student;

          return (
            <Student
              key={enrollment.toString()}
              enrollment={enrollment}
              studentClass={student_class}
              shift={shift}
              name={name}
              phoneNumber={phone_number}
              email={email}
              responsibleCpf={responsible_cpf}
              balance={balance}
              updateStudents={updateStudents}
              fetchStudentsList={fetchStudentsList}
              student={student}
            />
          );
        })}
      </div>
    </>
  );
}
