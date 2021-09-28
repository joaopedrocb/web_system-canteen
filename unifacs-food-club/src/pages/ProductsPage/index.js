// dependencies
import React from "react";

// presentation
import ProductsPagePresentation from "./presentation";

// infra
import { LocalStorageAdapter } from "../../infra";

// constants
import { PRODUCTS_LIST, LOGGED_USER } from "../../constants/domain/storageKeys";

export function ProductsPage() {

  const storage = React.useMemo(() => {
    return new LocalStorageAdapter();
  }, []);

  const _productsList = storage.getItem(PRODUCTS_LIST);
  const loggedUser = storage.getItem(LOGGED_USER);

  const [productsList, setProductsList] = React.useState(_productsList);

  React.useEffect(() => {
    if (productsList.length !== storage.getItem(PRODUCTS_LIST).length) {
      setProductsList(storage.getItem(PRODUCTS_LIST));
    }
  }, [productsList.length, storage]);

  return React.createElement(ProductsPagePresentation, {
    productsList,
    loggedUser,
  });
}
