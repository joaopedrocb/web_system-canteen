// dependencies
import React from 'react';

// presentation
import DeleteResponsiblePresentation from './presentation';

// api
import { _delete } from '../../../../../../common/main/infra';

export function DeleteResponsible(props) {
    const { setDeleteResponsibleModalIsActive, fetchResponsiblesList, cpf } = props;

    async function deleteResponsible() {
        await _delete(`/food_club_api/public_html/api/responsible/${cpf}`).then(() => {
            setDeleteResponsibleModalIsActive(false);
            fetchResponsiblesList();
        })
    }

    return React.createElement(DeleteResponsiblePresentation, {
        setDeleteResponsibleModalIsActive,
        
        deleteResponsible,
    });
}
