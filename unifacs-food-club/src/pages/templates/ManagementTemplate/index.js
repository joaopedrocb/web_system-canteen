// dependencies
import React from 'react';

// presentation
import ManagementTemplatePresentation from './presentation';

function ManagementTemplate(props) {
    const { children } = props;

    const userData = localStorage.getItem('userData');

    const [balance, setBalance] = React.useState(0);

    return React.createElement(ManagementTemplatePresentation, {
        userData: JSON.parse(userData),
        balance,
        setBalance,
    }, children);
}

export default ManagementTemplate;