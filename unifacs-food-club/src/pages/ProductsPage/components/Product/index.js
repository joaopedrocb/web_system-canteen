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
        picture,
        price,
        type,
        provider,
        accessLevel
    } = props;

    return React.createElement(ProductPresentation, {
        code,
        ingredients,
        isBlocked,
        name,
        picture,
        price,
        type,
        provider,
        accessLevel
    });
}