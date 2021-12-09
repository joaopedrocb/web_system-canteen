// dependencies
import React from 'react';

// presentation
import DeleteProductPresentation from './presentation';

// api
import { _delete } from '../../../../../../common/main/infra';

export function DeleteProduct(props) {
    const { setDeleteProductModalIsActive, code, fetchProductsList } = props;

    async function deleteProduct() {
        await _delete(`/food_club_api/public_html/api/product/${code}`).then( () => {
            setDeleteProductModalIsActive(false);
            fetchProductsList();
        }
        );
    }

    return React.createElement(
        DeleteProductPresentation, {
            setDeleteProductModalIsActive,
            deleteProduct,
        }
    )
}