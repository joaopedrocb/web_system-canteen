// dependencies
import React from "react";

// css
import "./styles.css";

// external components
import { CloseButton } from "../../../../components";

export function InsertResponsiblePresentational(props) {
  const {
    cpf,
    phone,

    onCPFInputChange,
    onNameInputChange,
    onPhoneInputChange,
    onEmailInputChange,
    onLoginInputChange,
    onPasswordInputChange,
    onSubmit,

    setInsertResponsibleModalIsActive,
  } = props;

  return (
    <>
      <main id="insert-responsible-page">
          <div className="close-button-container">
            <CloseButton onClick={() => setInsertResponsibleModalIsActive(false)}/>
          </div>

        <section class="insert-responsible-page_section">
          <span class="insert-responsible-page_section-title">
            Cadastrar responsável
          </span>
          <form class="insert-responsible-page_section-form">
            <input placeholder="CPF" value={cpf} onChange={onCPFInputChange} />
            <input placeholder="Nome" onChange={onNameInputChange} />
            <input placeholder="Telefone" onChange={onPhoneInputChange} value={phone} />
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
    </>
  );
}
