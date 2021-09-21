// dependencies
import React from 'react';
import { Link } from 'react-router-dom'

// css
import './styles.css';

function HeaderPresentation() {
    return (
        <header id="dashboard_header">
            <div class="dashboard_logo">LOGO</div>

            <ul class="header_navigation">
                <li class="header_navigation-options">
                    <Link to="/">Início</Link>
                </li>

                <li class="header_navigation-options">
                    <Link to="/sistema">Gerenciamento</Link>
                </li>
            </ul>

            <Link to="/login">
                <button class="header_login-button">Login</button>
            </Link>
        </header>
    );
}

export default HeaderPresentation;
