// dependencies
import React from 'react';

// css
import './styles.css';

// external components
import { CloseButton } from '../../../../components'

function BlockStudentPresentation(props) {
    const { setBlockStudentModalIsActive } = props;

    return (
        <div className="block-product-content">

            <div className="close-button-container">
                <CloseButton onClick={() => setBlockStudentModalIsActive(false)}/>
            </div>

            <span class="update-product-page_section-title">Bloquear estudante</span>

            <div>
                <span>Deseja bloquear o estudante?</span>

                <div className="block-product-footer">
                    <button>Voltar</button>
                    <button>Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export default BlockStudentPresentation;