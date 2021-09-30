// dependencies
import React from "react";

// css
import "./styles.css";

// external components
import { CloseButton } from "../../../../components";

export function InsertStudentPresentational(props) {
  const {
    shift,
    enrollment,
    name,
    studentClass,
    phone,
    email,
    login,
    password,

    onShiftInputChange,
    onEnrollmentInputChange,
    onClassInputChange,
    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onSubmit,

    setInsertStudentModalIsActive,
  } = props;

  const buttonIsDisabled =
    !shift ||
    !name ||
    !studentClass ||
    !phone ||
    !email ||
    !login ||
    !password ||
    !enrollment;

  function renderButton() {
    if (buttonIsDisabled) {
      return (
        <button type="button" className="buttonIsDisabled">
          Cadastrar
        </button>
      );
    }

    return <button onClick={onSubmit}>Cadastrar</button>;
  }

  return (
    <>
      <div className="close-button-container">
        <CloseButton onClick={() => setInsertStudentModalIsActive(false)}/>
      </div>

      <main id="insert-student-page">
        <section class="insert-student-page_section">
          <span class="insert-student-page_section-title">Cadastrar aluno</span>
          <span class="insert-student-page_section-subtitle">
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

          <form class="insert-student-page_section-form">
            <input placeholder="Matricula" onChange={onEnrollmentInputChange} />
            <input placeholder="Turma" onChange={onClassInputChange} />
            <input placeholder="Nome" onChange={onNameInputChange} />
            <input placeholder="Telefone" onChange={onPhoneInputChange} />
            <input
              name="email"
              type="text"
              pattern=".+@gmail\.com"
              required
              placeholder="Email"
              onChange={onEmailInputChange}
            />
            <input placeholder="Login" onChange={onLoginInputChange} />
            <input placeholder="Senha" onChange={onPasswordInputChange} />
          </form>

          <footer class="insert-student-page_section-footer">
            {renderButton()}
          </footer>
        </section>
      </main>
    </>
  );
}
