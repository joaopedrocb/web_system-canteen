// dependencies
import React from 'react';

// css
import './styles.css';

// external components
import { CloseButton } from '../../../../../../components';

function DeleteProductPresentation(props) {
    const { setDeleteProductModalIsActive } = props;

    return (
        <div className="block-product-content">

            <div className="close-button-container">
                <CloseButton onClick={() => setDeleteProductModalIsActive(false)}/>
            </div>

            <span class="update-product-page_section-title">Excluir Produto</span>

            <div>
                <span>Deseja excluir o produto?</span>

                <div className="block-product-footer">
                    <button>Voltar</button>
                    <button>Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteProductPresentation;