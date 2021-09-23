// dependencies
import React from 'react';

// css
import './styles.css'

function LandingPagePresentation() {
    return (
        <main id="landing-page">
            <section class="landing-page_presentation" style={({display: 'grid', alignItems: 'center', justifyContent: 'center'})}>
                <div class="box"></div>
            </section>

            <section class="landing-page_system-info" style={({display: 'grid', alignItems: 'center', justifyContent: 'center'})}>
                <h1 style={({color: 'white'})}>Infos Estáticas</h1>
            </section>

            <section class="lading-page_school-info" style={({display: 'grid', alignItems: 'center', justifyContent: 'center'})}>
                <h1 style={({color: 'white'})}>Infos dinâmicas</h1>
            </section>
        </main>
    )
}

export default LandingPagePresentation;