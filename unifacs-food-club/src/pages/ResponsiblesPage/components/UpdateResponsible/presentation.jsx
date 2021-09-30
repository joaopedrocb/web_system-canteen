// dependencies
import React from "react";

// css
import "./styles.css";

// external components
import { CloseButton } from "../../../../components";

export function UpdateResponsiblePresentational(props) {
  const {
    responsible,
    name,
    phone,
    email,
    login,
    password,

    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onSubmit,

    setUpdateResponsibleModalIsActive,
  } = props;

  const buttonIsDisabled = !name || !phone || !email || !login || !password;

  function renderButton() {
    if (buttonIsDisabled) {
      return (
        <button type="button" className="buttonIsDisabled">
          Editar
        </button>
      );
    }

    return <button onClick={onSubmit}>Editar</button>;
  }

  return (
    <>
      <div className="close-button-container">
        <CloseButton onClick={() => setUpdateResponsibleModalIsActive(false)}/>
      </div>

      <main id="update-responsible-page">
        <section class="update-responsible-page_section">
          <span class="update-responsible-page_section-title">
            Editar responsável
          </span>
          <form class="update-responsible-page_section-form">
            <input
              placeholder="Nome"
              onChange={onNameInputChange}
              defaultValue={responsible.name}
            />
            <input
              placeholder="Telefone"
              onChange={onPhoneInputChange}
              defaultValue={responsible.phone}
            />
            <input
              placeholder="Email"
              onChange={onEmailInputChange}
              defaultValue={responsible.email}
            />
            <input
              placeholder="Login"
              onChange={onLoginInputChange}
              defaultValue={responsible.login}
            />
            <input
              placeholder="Senha"
              onChange={onPasswordInputChange}
              defaultValue={responsible.password}
            />
          </form>

          <footer class="update-responsible-page_section-footer">
            {renderButton()}
          </footer>
        </section>
      </main>
    </>
  );
}
