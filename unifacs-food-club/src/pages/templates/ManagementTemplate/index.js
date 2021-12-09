// dependencies
import React from 'react';

// presentation
import ManagementTemplatePresentation from './presentation';

function ManagementTemplate(props) {
    const { children } = props;

    const userData = localStorage.getItem('userData');

    console.log('getUserData from template', JSON.parse(userData));

    return React.createElement(ManagementTemplatePresentation, {
        userData: JSON.parse(userData),
    }, children);
}

export default ManagementTemplate;