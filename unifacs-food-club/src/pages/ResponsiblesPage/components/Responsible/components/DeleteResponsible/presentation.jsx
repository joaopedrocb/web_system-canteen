// dependencies
import React from 'react';

// css
import './styles.css';

// external components
import { CloseButton } from '../../../../../../components';

function DeleteResponsiblePresentation(props) {
    const { setDeleteResponsibleModalIsActive, deleteResponsible } = props;

    return (
        <div className="block-product-content">

            <div className="close-button-container">
                <CloseButton onClick={() => setDeleteResponsibleModalIsActive(false)}/>
            </div>

            <span class="update-product-page_section-title">Excluir Responsável</span>

            <div>
                <span>Deseja excluir o responsável?</span>

                <div className="block-product-footer">
                    <button>Voltar</button>
                    <button onClick={deleteResponsible}>Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteResponsiblePresentation;