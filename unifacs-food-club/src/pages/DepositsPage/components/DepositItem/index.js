// dependencies
import React from 'react';

// presentation
import DepositItemPresentation from './presentation';

export function DepositItem(props) {
    const {
        date, studentName, value, studentEnrollment
    } = props;

    return React.createElement(DepositItemPresentation, {
        date, studentName, value, studentEnrollment
    });
}