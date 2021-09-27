// dependencies
import React from 'react';

// css
import './styles.css'

function LandingPagePresentation() {
    return (
        <main id="landing-page">
            <section class="landing-page_presentation" style={({display: 'grid', alignItems: 'center', justifyContent: 'flex-start'})}>
                <div class="box"></div>

                <div className="title_container">
                    <span className="title">Facilite <br/> seu comércio</span>
                    <button className="title-button">Comece agora</button>
                </div>
            </section>

            <section class="landing-page_system-info">
                <div className="static-info-box" style={({marginBottom: '40px'})}>
                    <span className="static-info-title">Segurança reforçada</span>

                    <text className="static-info-text">
                        Nossa plataforma oferece um ambiente seguro e de confiança por meio de protocolos modernos de criptografia. Seus dados estão seguros conosco, então fique tranquilo para realizar depósitos e fazer compras.
                    </text>
                </div>

                <div className="static-info-box" style={({marginTop: '40px'})}>
                    <span className="static-info-title">Objetivos</span>

                    <text className="static-info-text">
                        Nossa missão é garantir que o estudante gaste seu precioso tomando as decisões na sala de aula e no seu futuro, com nossa plataforma, é possível reduzir o tempo que o aluno passa tomando decisões e manter um histórico da sua alimentação e gastos.
                        
                    </text>
                </div>

                <div className="static-info-box" style={({marginBottom: '40px'})}>
                    <span className="static-info-title">Vantagens</span>


                    <text className="static-info-text">
                        Nossa plataforma se destaca por conta de sua interface inovadora e de fácil adaptação. Também oferecemos um ambiente seguro e privado para responsáveis e alunos.

                    </text>
                </div>
            </section>

            <section class="lading-page_school-info">
                <div className="image-school"/>

                <div className="school-info">
                    <span>Nome: Unifacs</span>
                    <span>Endereço: Rio Vermelho</span>
                    <span>Telefone: 71 99999-9999</span>
                    <span>Email: unifacs.edu.br</span>
                </div>
            </section>
        </main>
    )
}

export default LandingPagePresentation;