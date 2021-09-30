// dependencies
import React from "react";
import { Link } from "react-router-dom";

// css
import "./styles.css";

// template
import { ManagementTemplate } from "../../templates";

export function InsertResponsiblePresentational(props) {
  const {
    cpf,
    name,
    phone,
    email,
    login,
    password,

    onCPFInputChange,
    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onSubmit,

    setInsertResponsibleModalIsActive,
  } = props;

  const buttonIsDisabled =
    !cpf || !name || !phone || !email || !login || !password;

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
      <main id="insert-responsible-page">
        <span className="back" onClick={() => setInsertResponsibleModalIsActive(false)}>
          Fechar
        </span>

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
            {renderButton()}
          </footer>
        </section>
      </main>
    </>
  );
}
