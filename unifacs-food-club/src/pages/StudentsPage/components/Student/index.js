// dependencies
import React from 'react';

// presentation
import StudentPresentation from './presentation';

export function Student(props) {
    const {
        enrollment,
        studentClass,
        shift,
        name,
        phoneNumber,
        email,
        responsibleCpf,
        balance,
    } = props;

    return React.createElement(StudentPresentation, {
        enrollment,
        studentClass,
        shift,
        name,
        phoneNumber,
        email,
        responsibleCpf,
        balance,
    });
}