// dependencies
import React from 'react';

// presentation
import StatementItemPresentation from './presentation';

export function StatementItem(props) {
    const {
        date, productName, value, studentEnrollment
    } = props;

    return React.createElement(StatementItemPresentation, {
        date, productName, value, studentEnrollment
    });
}