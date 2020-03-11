import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './Cart.css'


function Cart() {
  const cart = useSelector(st => st.cart);

  return (
    <div >
      <ListGroup className="Cart">
        {
          cart.map(product => (
            <ListGroupItem key={product.id}>
              <Product product={product} />
            </ListGroupItem>
          ))
        }
      </ListGroup >
    </div>
  )

}
export default Cart;