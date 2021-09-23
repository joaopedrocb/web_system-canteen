// dependencies
import React from 'react';

// presentation
import ResponsiblePresentation from './presentation';

export function Responsible(props) {
    const {
        cpf,
        name,
        phoneNumber,
        email,
        login,
        password,
        studentsEnrollment,
    } = props;

    return React.createElement(ResponsiblePresentation, {
        cpf,
        name,
        phoneNumber,
        email,
        login,
        password,
        studentsEnrollment,
    });
}