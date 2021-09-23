// dependencies
import React from 'react';

// presentation
import ProductsPagePresentation from './presentation';

// infra
import { LocalStorageAdapter } from '../../infra'

// constants
import { PRODUCTS_LIST } from '../../constants/domain/storageKeys';

export function ProductsPurchasePage() {
    const storage = React.useMemo(() => {
        return new LocalStorageAdapter();
    }, []); 

    const _productsList = storage.getItem(PRODUCTS_LIST);

    const [productsList, setProductsList] = React.useState(_productsList);

    React.useEffect(() => {
        if (productsList.length !== storage.getItem(PRODUCTS_LIST).length) {
            setProductsList(storage.getItem(PRODUCTS_LIST));
        }
    }, [productsList.length, storage]);

    return React.createElement(ProductsPagePresentation, {productsList});
}
