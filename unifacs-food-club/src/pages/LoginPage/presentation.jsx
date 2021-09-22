// dependencies
import React from 'react';
import { Link } from 'react-router-dom'

// css
import './styles.css';

function LoginPagePresentation() {
    return (
        <main id="login-page">
            <section class="login-page_section">
                <span class="login-page_section-title">Entrar</span>

                <form class="login-page_section-form">
                    <input placeholder="Email"></input>
                    <input placeholder="Senha"></input>
                </form>

                <footer class="login-page_section-footer">
                    <Link to="/login" class="login-page_section-footer-forgot-password">
                        Esqueceu a senha?
                    </Link>

                    <button>Entrar</button>

                    <hr />

                    <span class="login-page_section-footer-sign-up-text">
                        Sua escola ainda não está cadastrada?
                        {' '}
                        <Link to="/login">Cadastre agora</Link>
                    </span>

                </footer>
            </section>
        </main>
    )
}

export default LoginPagePresentation;