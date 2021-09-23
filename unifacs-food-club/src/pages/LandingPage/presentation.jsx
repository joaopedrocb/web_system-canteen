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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, aperiam quidem. Qui quod rerum ipsam corrupti esse iure quasi expedita beatae temporibus excepturi? Quis possimus harum sed repudiandae, ab facilis?
                    </text>
                </div>

                <div className="static-info-box" style={({marginTop: '40px'})}>
                    <span className="static-info-title">Objetivos</span>

                    <text className="static-info-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, aperiam quidem. Qui quod rerum ipsam corrupti esse iure quasi expedita beatae temporibus excepturi? Quis possimus harum sed repudiandae, ab facilis?
                    </text>
                </div>

                <div className="static-info-box" style={({marginBottom: '40px'})}>
                    <span className="static-info-title">Vantagens</span>


                    <text className="static-info-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, aperiam quidem. Qui quod rerum ipsam corrupti esse iure quasi expedita beatae temporibus excepturi? Quis possimus harum sed repudiandae, ab facilis?
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