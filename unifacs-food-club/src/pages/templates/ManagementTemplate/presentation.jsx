// dependencies
import React from "react";
import { Link } from "react-router-dom";

// enums
import { AccessLevelEnum } from "../../../common/domain";

// css
import "./styles.css";

function ManagementTemplatePresentation(props) {
  const { children, userData } = props;

  function renderProductsButton() {
    if (userData?.access_level === AccessLevelEnum.STUDENT.id) {
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
    if (userData?.access_level !== AccessLevelEnum.STAFF.id) {
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
    if (userData?.access_level !== AccessLevelEnum.RESPONSIBLE.id) {
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
    if (userData?.access_level !== AccessLevelEnum.STUDENT.id) {
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

  return (
    <>
      <header className="management-header">
        <div className="logo" />

        <input
          className="search-input"
          placeholder="Procurar aluno, responsável ou produto"
        />

        <div className="welcome-content">
          <div className="user-logo" />
          Olá {userData?.name}
        </div>
      </header>

      <section id="management-page">
        <div class="management-page_navbar">
          <div onClick={() => localStorage.removeItem('userData')} className="actions-container">
            <Link to="/">Voltar ao início</Link>
          </div>

          {renderProductsButton()}

          {renderResponsiblesListButton()}

          {renderStudentsButton()}

          {renderProductsPurchaseButton()}
        </div>

        <div className="management-page_main">{children}</div>
      </section>
    </>
  );
}

export default ManagementTemplatePresentation;
