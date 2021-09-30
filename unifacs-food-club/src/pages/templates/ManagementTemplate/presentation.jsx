// dependencies
import React from "react";
import { Link } from "react-router-dom";

// enums
import { AccessLevelEnum } from "../../../common/domain";

// css
import "./styles.css";

function ManagementTemplatePresentation(props) {
  const { children, userData } = props;

  function renderBalance() {
    return (
      <div className="user-infos">
        <span>Saldo:</span>

        <span>R$ {userData?.balance || "-"}</span>
      </div>
    );
  }

  function renderProductsButton() {
    if (userData?.accessLevel.id === AccessLevelEnum.STUDENT.id) {
      return null;
    }

    return (
      <Link to="/gerenciamento/produtos">
        <div className="navbar-item">
          <div className="navbar-item_logo products" />
          Produtos
        </div>
      </Link>
    );
  }

  function renderResponsiblesListButton() {
    if (userData?.accessLevel.id !== AccessLevelEnum.STAFF.id) {
      return null;
    }

    return (
      <Link replace to="/gerenciamento/responsaveis">
        <div className="navbar-item">
          <div className="navbar-item_logo responsibles" />
          Responsáveis
        </div>
      </Link>
    );
  }

  function renderStudentsButton() {
    if (userData?.accessLevel.id !== AccessLevelEnum.RESPONSIBLE.id) {
      return null;
    }

    return (
      <Link to="/gerenciamento/alunos">
        <div className="navbar-item">
          <div className="navbar-item_logo students" />
          Alunos
        </div>
      </Link>
    );
  }

  function renderProductsPurchaseButton() {
    if (userData?.accessLevel.id !== AccessLevelEnum.STUDENT.id) {
      return null;
    }

    return (
      <Link to="/comprar">
        <div className="navbar-item">
          <div className="navbar-item_logo cart" />
          Comprar
        </div>
      </Link>
    );
  }

  function renderStatementButton() {
    if (userData?.accessLevel.id === AccessLevelEnum.RESPONSIBLE.id) {
      return (
        <Link to="/gerenciamento/extrato">
          <div className="navbar-item">
            <div className="navbar-item_logo extrato" />
            Extrato de consumo
          </div>
        </Link>
      );
    }

    return null;
  }

  function renderDepositsButton() {
    if (userData?.accessLevel.id === AccessLevelEnum.RESPONSIBLE.id) {
      return (
        <Link to="/gerenciamento/depositos">
          <div className="navbar-item">
            <div className="navbar-item_logo deposit" />
            Extrato de depósitos
          </div>
        </Link>
      );
    }

    return null;
  }

  return (
    <>
      <header className="management-header">
        <div className="logo" />

        <input
          className="search-input"
          placeholder="Procurar aluno, responsável ou produto"
        />

        {renderBalance()}

        <div className="welcome-content">
          <div className="user-logo" />
          Olá {userData?.name}
        </div>
      </header>

      <section id="management-page">
        <div class="management-page_navbar">
          <div className="actions-container">
            <Link to="/">Voltar ao início</Link>
          </div>

          {renderProductsButton()}

          {renderResponsiblesListButton()}

          {renderStudentsButton()}

          {renderProductsPurchaseButton()}

          {renderStatementButton()}

          {renderDepositsButton()}
        </div>

        <div className="management-page_main">{children}</div>
      </section>
    </>
  );
}

export default ManagementTemplatePresentation;
