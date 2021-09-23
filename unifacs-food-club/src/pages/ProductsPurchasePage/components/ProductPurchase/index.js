// dependencies
import React from 'react';

// presentation
import ProductPurchasePresentation from './presentation';

export function ProductPurchase(props) {
    const {
        ingredients,
        isBlocked,
        name,
        picture,
        price,
    } = props;

    return React.createElement(ProductPurchasePresentation, {
        ingredients,
        isBlocked,
        name,
        picture,
        price,
    });
}