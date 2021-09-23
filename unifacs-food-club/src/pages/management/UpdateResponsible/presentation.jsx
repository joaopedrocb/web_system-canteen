// dependencies
import React from 'react';

// css
import './styles.css';

export function UpdateResponsiblePresentational(props) {
    const {
      responsible,

      onNameInputChange,
      onPhoneInputChange,
      onEmailInputChange,
      onLoginInputChange,
      onPasswordInputChange,
      onSubmit
    } = props;

    return (
        <main id="update-responsible-page">
          <section class="update-responsible-page_section">
              <span class="update-responsible-page_section-title">Editar responsável</span>
              <form class="update-responsible-page_section-form">
                <input placeholder="Nome" onChange={onNameInputChange} defaultValue={responsible.name}/>
                <input placeholder="Telefone" onChange={onPhoneInputChange} defaultValue={responsible.phoneNumber} />
                <input placeholder="Email" onChange={onEmailInputChange} defaultValue={responsible.email} />
                <input placeholder="Login" onChange={onLoginInputChange} defaultValue={responsible.login} />
                <input placeholder="Senha" onChange={onPasswordInputChange} defaultValue={responsible.password} />
              </form>

              <footer class="update-responsible-page_section-footer">
                  <button onClick={onSubmit}>Editar</button>
              </footer>
          </section>
        </main>
    )
}