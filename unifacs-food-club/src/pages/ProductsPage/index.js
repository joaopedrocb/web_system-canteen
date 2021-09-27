// dependencies
import React from "react";

// presentation
import ProductsPagePresentation from "./presentation";

// infra
import { LocalStorageAdapter } from "../../infra";

// constants
import { PRODUCTS_LIST } from "../../constants/domain/storageKeys";

export function ProductsPage() {
  const [show, setShow] = React.useState(false);

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

  function toggleCreateProductModalVisibility() {
    setShow(!show)
  }

  return React.createElement(ProductsPagePresentation, { productsList, toggleCreateProductModalVisibility, show });
}
