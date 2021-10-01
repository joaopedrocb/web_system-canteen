// dependencies
import React from 'react';

// css
import './styles.css';

// external components
import { CloseButton } from '../../../../components';

function DeleteStudentPresentation(props) {
    const { setDeleteStudentModalIsActive } = props;

    return (
        <div className="block-product-content">

            <div className="close-button-container">
                <CloseButton onClick={() => setDeleteStudentModalIsActive(false)}/>
            </div>

            <span class="update-product-page_section-title">Excluir Aluno</span>

            <div>
                <span>Deseja excluir o aluno?</span>

                <div className="block-product-footer">
                    <button>Voltar</button>
                    <button>Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteStudentPresentation;