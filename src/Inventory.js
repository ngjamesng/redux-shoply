import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import './Inventory.css'
import { ListGroup, ListGroupItem } from 'reactstrap';

function Inventory() {
  const inventory = useSelector(st => st.inventory);

  return (
    <div >
      <ListGroup className="Inventory">
        {
          inventory.map(product => (
            <ListGroupItem key={product.id}>
              <Product product={product}/>
            </ListGroupItem>
          ))
        }
      </ListGroup >
    </div>
  )

}
export default Inventory;