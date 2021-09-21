// dependencies
import React from 'react';

// css
import './styles.css';

// components
import { Header } from './components';

function DashboardTemplatePresentation(props) {
    const { children } = props;

    return (
        <main id="dashboard_main">
            <Header />

            {children}
        </main>
    );
}

export default DashboardTemplatePresentation;