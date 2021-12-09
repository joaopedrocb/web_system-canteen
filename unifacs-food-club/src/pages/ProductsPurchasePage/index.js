// dependencies
import React from "react";

// presentation
import ProductsPagePresentation from "./presentation";

// api
import { get, post } from '../../common/main/infra';

export function ProductsPurchasePage() {
  const userData = JSON.parse(localStorage.getItem('userData'));

  const [productsList, setProductsList] = React.useState([]);

  async function fetchProductsList() {
    const response = await get('/food_club_api/public_html/api/product');

    setProductsList(response?.data?.data);
  }

  React.useEffect(() => {
    fetchProductsList();
  }, []);

  
  async function onPurchase(productCode) {
    await post(`/food_club_api/public_html/api/student/buy/${productCode}/${userData.enrollment}`).then((response) => {
      console.log(response)
      if (response?.data?.status === 'success') {
        alert(response.data.data)
      }
    }).catch((error) => alert(error.response?.data?.error))
  }

  return React.createElement(ProductsPagePresentation, { productsList, onPurchase });
}
