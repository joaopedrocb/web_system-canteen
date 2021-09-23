// dependencies
import React from 'react';
import { Link } from 'react-router-dom'

// css
import './styles.css';

function HeaderPresentation(props) {
    const { hasALoggedUser, clearSession } = props;

    function renderLoginOrLogoutButton() {
        if (hasALoggedUser) {
            return <button onClick={clearSession} class="header_logout-button">Sair</button>
        }

        return (
            <Link to="/login">
                <button class="header_login-button">Login</button>
            </Link>
        );
    }

    return (
        <header id="dashboard_header">
            <div class="dashboard_logo">LOGO</div>

            <ul class="header_navigation">
                <li class="header_navigation-options">
                    <Link to="/">Início</Link>
                </li>

                <li class="header_navigation-options">
                    <Link to="/gerenciamento">Gerenciamento</Link>
                </li>
            </ul>

            {renderLoginOrLogoutButton()}
        </header>
    );
}

export default HeaderPresentation;
