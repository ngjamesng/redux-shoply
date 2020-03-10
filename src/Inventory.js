import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product  from './Product';

function Inventory() {
  const products = useSelector(st => st.inventory);

  const productsList = [...Object.entries(products)].map(p => {
    return {...p[1], id:p[0]};
  });
  console.log(productsList)
  // for (let key in products.products){
  //   console.log(key)
  // }
  return (
    <div>
      <h1>inventory!!!!</h1>
      {
        [...productsList].map(product => <Product product={product} key={product.id} />)
      }
    </div>
  )

}
export default Inventory;