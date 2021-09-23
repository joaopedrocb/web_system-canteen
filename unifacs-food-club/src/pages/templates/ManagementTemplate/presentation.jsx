// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// css
import './styles.css'

function ManagementTemplatePresentation(props) {
    const { children, loggedUser } = props;

    return (
        <section id="management-page">
            <div class="management-page_navbar">

                <div className="actions-container">
                    <Link replace to='/'>Voltar ao início</Link>
                </div>

                <div className="navbar-header">
                    <div className="user-logo"/>

                    <span className="user-name">{loggedUser?.name}</span>

                    <div className="user-infos">
                        <span>Saldo:</span>
                        
                        <span>R$ {loggedUser?.balance || '-'}</span>
                    </div>
                </div>

                <hr/>

                <Link replace to="/gerenciamento/produtos">
                    <div className="navbar-item">
                        <div className="navbar-item_logo products"/>

                        Produtos
                    </div>
                </Link>

                <Link replace to="/gerenciamento/responsaveis">
                    <div className="navbar-item">
                        <div className="navbar-item_logo responsibles"/>

                        Responsáveis
                    </div>
                </Link>

                <Link to="/gerenciamento/alunos">
                    <div className="navbar-item">
                        <div className="navbar-item_logo students"/>

                        Alunos
                    </div>
                </Link>

                <Link to="/comprar">
                    <div className="navbar-item">
                        <div className="navbar-item_logo cart"/>

                        Comprar
                    </div>
                </Link>
            </div>

            <div className="management-page_main">
                {children}
            </div>
        </section>
    )
}

export default ManagementTemplatePresentation;