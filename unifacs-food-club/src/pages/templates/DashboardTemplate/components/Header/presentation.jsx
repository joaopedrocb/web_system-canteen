// dependencies
import React from 'react';
import { Link } from 'react-router-dom'

// css
import './styles.css';

function HeaderPresentation(props) {
    const { hasALoggedUser, managementPageHasBeenActive, clearSession } = props;

    function renderLoginOrLogoutButton() {
        if (hasALoggedUser) {
            return <button onClick={clearSession} class="header_logout-button">Sair</button>
        }

        return (
            <Link replace to="/login">
                <button class="header_login-button">Login</button>
            </Link>
        );
    }

    function renderHeader() {
        if (managementPageHasBeenActive) {
            return null;
        }

        return (
            <header id="dashboard_header">
                <div class="dashboard_logo">{'.'}</div>

                <ul class="header_navigation">
                    <li class="header_navigation-options">
                        <Link replace to="/">Início</Link>
                    </li>

                    <li class="header_navigation-options">
                        <Link replace to="/gerenciamento">Gerenciamento</Link>
                    </li>
                </ul>

                {renderLoginOrLogoutButton()}
            </header>
        )
    }

    return renderHeader();
}

export default HeaderPresentation;
