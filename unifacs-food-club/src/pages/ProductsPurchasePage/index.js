// dependencies
import React from "react";

// presentation
import ProductsPagePresentation from "./presentation";
// api
import { get, post } from '../../common/main/infra';



export function ProductsPurchasePage() {
  const [productsList, setProductsList] = React.useState([]);

  const userData = localStorage.getItem('userData');

  async function fetchProductsList() {
    const response = await get('/food_club_api/public_html/api/product');

    setProductsList(response?.data?.data);
  }

  React.useEffect(() => {
    fetchProductsList();
  }, []);

  
  async function onPurchase(productCode) {
    console.log('onPurchase')
    console.log(productCode)
    await post(`/food_club_api/public_html/api/student/buy/${productCode}/144171001`).then((response) => {
      if (response?.data?.status === 'success') {
        alert(response.data.data)
      }
    })
  }

  return React.createElement(ProductsPagePresentation, { productsList, onPurchase });
}
