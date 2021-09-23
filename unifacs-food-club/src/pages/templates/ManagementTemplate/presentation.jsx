// dependencies
import React from "react";
import { Link } from "react-router-dom";

import { AccessLevel } from "../../../enums";

// css
import "./styles.css";

function ManagementTemplatePresentation(props) {
  const { children, loggedUser } = props;

  function renderBalance() {
    if (loggedUser.accessLevel.id !== AccessLevel.STUDENT.id) {
      return null;
    }
    return (
      <div className="user-infos">
        <span>Saldo:</span>

        <span>R$ {loggedUser?.balance || "-"}</span>
      </div>
    );
  }

  function renderProductsButton() {
    if (loggedUser.accessLevel.id === AccessLevel.STUDENT.id) {
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
    if (loggedUser.accessLevel.id !== AccessLevel.STAFF.id) {
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
    if (loggedUser.accessLevel.id === AccessLevel.STUDENT.id) {
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
    if (loggedUser.accessLevel.id !== AccessLevel.STUDENT.id) {
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
    if (loggedUser.accessLevel.id === AccessLevel.RESPONSIBLE.id) {
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
    if (loggedUser.accessLevel.id === AccessLevel.RESPONSIBLE.id) {
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
    <section id="management-page">
      <div class="management-page_navbar">
        <div className="actions-container">
          <Link to="/">Voltar ao início</Link>
        </div>

        <div className="navbar-header">
          <div className="user-logo" />

          <span className="user-name">{loggedUser?.name}</span>

          {renderBalance()}
        </div>

        <hr />

        {renderProductsButton()}

        {renderResponsiblesListButton()}

        {renderStudentsButton()}

        {renderProductsPurchaseButton()}

        {renderStatementButton()}

        {renderDepositsButton()}
      </div>

      <div className="management-page_main">{children}</div>
    </section>
  );
}

export default ManagementTemplatePresentation;
