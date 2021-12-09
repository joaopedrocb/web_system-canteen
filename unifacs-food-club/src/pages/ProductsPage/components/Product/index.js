// dependencies
import React from 'react';

// presentation
import ProductPresentation from './presentation';

export function Product(props) {
    const {
        code,
        ingredients,
        isBlocked,
        name,
        price,
        type,
        provider,
        accessLevel,
        productsList,

        changeProductsList,
        fetchProductsList,
    } = props;

    const [updateProductModalIsActive, setUpdateProductModalIsActive] = React.useState(false);

    const [deleteProductModalIsActive, setDeleteProductModalIsActive] = React.useState(false);

    return React.createElement(ProductPresentation, {
        code,
        ingredients,
        isBlocked,
        name,
        price,
        type,
        provider,
        accessLevel,
        productsList,
        changeProductsList,

        updateProductModalIsActive,
        setUpdateProductModalIsActive,

        deleteProductModalIsActive, 
        setDeleteProductModalIsActive,

        fetchProductsList,
    });
}