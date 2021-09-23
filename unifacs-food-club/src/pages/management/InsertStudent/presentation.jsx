// dependencies
import React from "react";

// css
import "./styles.css";

// template
import { ManagementTemplate } from "../../templates";

export function InsertStudentPresentational(props) {
  const {
    onShiftInputChange,
    onEnrollmentInputChange,
    onClassInputChange,
    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onSubmit,
  } = props;

  return (
    <ManagementTemplate>
      <main id="insert-student-page">
        <section class="insert-student-page_section">
          <span class="insert-student-page_section-title">Cadastrar aluno</span>
          <span class="insert-student-page_section-subtitle">
            Selecione o turno do aluno:
          </span>
          <hr />

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
            <button onClick={onSubmit}>Cadastrar</button>
          </footer>
        </section>
      </main>
    </ManagementTemplate>
  );
}
