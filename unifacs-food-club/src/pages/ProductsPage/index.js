// dependencies
import React from "react";

// presentation
import ProductsPagePresentation from "./presentation";

// api
import { get } from '../../common/main/infra';


export function ProductsPage(props) {
  const { changeProductsList } = props;

  const userData = localStorage.getItem('userData');

  const [createProductModalIsActive, setCreateProductModalIsActive] = React.useState(false);

  const [productsList, setProductsList] = React.useState([]);

  async function fetchProductsList() {
    const response = await get('/food_club_api/public_html/api/product');

    setProductsList(response?.data?.data);
  }

  React.useEffect(() => {
    fetchProductsList();
  }, []);

  return React.createElement(ProductsPagePresentation, { 
    userData: JSON.parse(userData), 
    productsList, 
    changeProductsList, 

    createProductModalIsActive,
    setCreateProductModalIsActive,
    fetchProductsList,
  });
}
