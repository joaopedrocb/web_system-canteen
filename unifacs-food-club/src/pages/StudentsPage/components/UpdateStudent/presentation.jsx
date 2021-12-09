// dependencies
import React from "react";

// css
import "./styles.css";

// external components
import { CloseButton } from "../../../../components";

export function UpdateStudentPresentational(props) {
  const {
    student,
    shift,
    name,
    studentClass,
    phone,
    email,
    login,
    password,

    onShiftInputChange,
    onClassInputChange,
    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onCpfInputChange,
    onSubmit,

    setUpdateResponsibleModalIsActive
  } = props;

  return (
    <>
      <div className="close-button-container">
        <CloseButton onClick={() => setUpdateResponsibleModalIsActive(false)}/>
      </div>

      <main id="update-student-page">
        <section class="update-student-page_section">
          <span class="update-student-page_section-title">Editar aluno</span>
          <span class="update-student-page_section-subtitle">
            Selecione o turno do aluno:
          </span>

          <div>
            <input
              type="radio"
              id="shiftType1"
              name="shiftType1"
              value={1}
              onChange={onShiftInputChange}
            />
            <label for="shiftType1">Matutino</label>

            <input
              type="radio"
              id="shiftType2"
              name="shiftType2"
              value={2}
              onChange={onShiftInputChange}
            />
            <label for="shiftType2">Vespertino</label>
          </div>

          <form class="update-student-page_section-form">
            <input
              placeholder="Turma"
              onChange={onClassInputChange}
              defaultValue={student.student_class}
            />
            <input
              placeholder="Nome"
              onChange={onNameInputChange}
              defaultValue={student.name}
            />
            <input
              placeholder="Telefone"
              onChange={onPhoneInputChange}
              defaultValue={student.phone_number}
            />
            <input
              placeholder="Email"
              onChange={onEmailInputChange}
              defaultValue={student.email}
            />
            <input
              placeholder="Login"
              onChange={onLoginInputChange}
              defaultValue={student.login}
            />
            <input
              placeholder="Senha"
              onChange={onPasswordInputChange}
              defaultValue={student.password}
            />
            <input
              placeholder="Cpf"
              onChange={onCpfInputChange}
              defaultValue={student.responsible_cpf}
            />
          </form>

          <footer class="update-student-page_section-footer">
            <button onClick={onSubmit}>Editar</button>
          </footer>
        </section>
      </main>
    </>
  );
}
