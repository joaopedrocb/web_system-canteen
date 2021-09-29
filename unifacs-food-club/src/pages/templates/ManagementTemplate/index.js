// dependencies
import React from 'react';

// presentation
import ManagementTemplatePresentation from './presentation';


function ManagementTemplate(props) {
    const { children, userData } = props;

    return React.createElement(ManagementTemplatePresentation, {
        userData,
    }, children)
}

export default ManagementTemplate;