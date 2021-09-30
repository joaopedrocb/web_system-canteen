// dependencies
import React from "react";

// css
import "./styles.css";

// external components
import { CloseButton } from "../../../../components";

export function InsertBalancePresentational(props) {
  const {
    balance,

    studentName,
    studentEnrollment,
    currentBalance,

    onSubmit,
    onBalanceInputChange,

    setInsertBalanceModalIsActive,
  } = props;

  const buttonIsDisabled = !balance;

  function renderButton() {
    if (buttonIsDisabled) {
      return (
        <button type="button" className="buttonIsDisabled">
          Depositar
        </button>
      );
    }

    return <button onClick={onSubmit}>Depositar</button>;
  }

  return (
    <>
      <div className="close-button-container">
        <CloseButton onClick={() => setInsertBalanceModalIsActive(false)}/>
      </div>

      <main>
        <section class="insert-balance-page_section">
          <span class="insert-balance-page_section-title">
            Inserir depóstio
          </span>

          <span class="insert-balance-page_section-subtitle">
            {`Aluno: ${studentName}`}
          </span>
          <span class="insert-balance-page_section-subtitle">
            {`Matrícula: ${studentEnrollment}`}
          </span>
          <span class="insert-balance-page_section-subtitle">
            {`Saldo atual: R$ ${currentBalance}`}
          </span>

          <form class="insert-balance-page_section-form">
            <input
              placeholder="Valor do depósito (R$)"
              onChange={onBalanceInputChange}
              type="number"
            />
          </form>

          <footer class="insert-balance-page_section-footer">
            {renderButton()}
          </footer>
        </section>
      </main>
    </>
  );
}
