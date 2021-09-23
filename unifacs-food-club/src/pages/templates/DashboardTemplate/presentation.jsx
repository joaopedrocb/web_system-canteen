// dependencies
import React from 'react';

// css
import './styles.css';

// components
import { Header } from './components';

function DashboardTemplatePresentation(props) {
    const { children, loginPageIsActive } = props;

    function renderHeader() {
        if (loginPageIsActive) {
            return null;
        }
        
        return <Header />;
    }

    return (
        <main id="dashboard_main">
            {renderHeader()}
            {children}
        </main>
    );
}

export default DashboardTemplatePresentation;