// dependencies
import React from 'react';

// presentation
import ProductsPagePresentation from './presentation';

// infra
import { LocalStorageAdapter } from '../../infra'


export function ProductsPurchasePage() {
    const storage = React.useMemo(() => {
        return new LocalStorageAdapter();
    }, []); 

    const _productsList = storage.getItem();

    const [productsList, setProductsList] = React.useState(_productsList);

    React.useEffect(() => {
        if (productsList.length !== storage.getItem().length) {
            setProductsList(storage.getItem());
        }
    }, [productsList.length, storage]);

    return React.createElement(ProductsPagePresentation, {productsList});
}
