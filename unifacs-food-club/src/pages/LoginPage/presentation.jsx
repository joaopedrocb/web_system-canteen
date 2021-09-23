// dependencies
import React from 'react';
import { Link } from 'react-router-dom'

// css
import './styles.css';

function LoginPagePresentation(props) {
    const { 
        email,
        password,

        onClickLogin,
        onEmailInputChange,
        onPasswordInputChange,
    } = props;

    const buttonIsDisabled = !email || !password;

    function renderButton() {
        if (buttonIsDisabled) {
            return <button type="button" className="buttonIsDisabled">Entrar</button>;
        }

        return <button onClick={onClickLogin}>Entrar</button>
    }

    return (
        <main id="login-page">
            <div className="box login-box"/>
            <div className="box login-box-small"/>
            <div className="box login-box-medium"/>

            <section class="login-page_section">
                <header className="login-page_section-header">
                    <span class="login-page_section-title">Entrar</span>

                    <Link replace to="/">Voltar ao início</Link>
                </header>

                <form autocomplete="on" class="login-page_section-form">
                    <div className="login-page_section-form-inputs-container">
                        <input name="email" type="text"  pattern=".+@gmail\.com" required onChange={onEmailInputChange} placeholder="Email"></input>
                        <input name="password" type="password" onChange={onPasswordInputChange} placeholder="Senha"></input>
                    </div>

                    <Link replace to="/login" class="login-page_section-form-forgot-password">
                        Esqueceu a senha?
                    </Link>

                    {renderButton()}
                </form>

                <footer class="login-page_section-footer">
                    <hr />

                    <span class="login-page_section-footer-sign-up-text">
                        Sua escola ainda não está cadastrada?
                        {' '}
                        <Link replace to="/login">Cadastre agora</Link>
                    </span>

                </footer>
            </section>
        </main>
    )
}

export default LoginPagePresentation;