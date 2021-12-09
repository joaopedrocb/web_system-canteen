// dependencies
import React from 'react';

// presentation
import DeleteStudentPresentation from './presentation';

// api
import { _delete } from '../../../../common/main/infra';

export function DeleteStudent(props) {
    const { setDeleteStudentModalIsActive, enrollment, fetchStudentsList } = props;

    async function deleteStudent() {
        await _delete(`/food_club_api/public_html/api/student/${enrollment}`).then(() => {
            setDeleteStudentModalIsActive(false);
            fetchStudentsList();
        });
    }

    return React.createElement(DeleteStudentPresentation, {
        setDeleteStudentModalIsActive,

        deleteStudent,
    })
}