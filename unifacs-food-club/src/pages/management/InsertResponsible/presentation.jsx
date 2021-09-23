// dependencies
import React from "react";

// css
import "./styles.css";

// template
import { ManagementTemplate } from "../../templates";

export function InsertResponsiblePresentational(props) {
  const {
    onCPFInputChange,
    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onSubmit,
  } = props;

  return (
    <ManagementTemplate>
      <main id="insert-responsible-page">
        <section class="insert-responsible-page_section">
          <span class="insert-responsible-page_section-title">
            Cadastrar responsável
          </span>
          <form class="insert-responsible-page_section-form">
            <input placeholder="CPF" onChange={onCPFInputChange} />
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

          <footer class="insert-responsible-page_section-footer">
            <button onClick={onSubmit}>Cadastrar</button>
          </footer>
        </section>
      </main>
    </ManagementTemplate>
  );
}
