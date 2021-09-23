// dependencies
import React from 'react';

// presentation
import ManagementTemplatePresentation from './presentation';

function ManagementTemplate(props) {
    const { children } = props;

    return React.createElement(ManagementTemplatePresentation, {}, children)
}

export default ManagementTemplate;