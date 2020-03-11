import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "reactstrap";
import {
  addToCart,
  removeFromCart,
  incrementProductQuantity,
  decrementProductQuantity
} from "./actions";
import './Product.css';

function Product({ product }) {
  const cartProduct = useSelector(st => st.cart.find(p => p.id === product.id));
  const dispatch = useDispatch();

  const { name, price } = product;

  const handleAdd = () => {
    dispatch(addToCart(product));
  }

  const handleRemove = () => {
    dispatch(removeFromCart(cartProduct));
  }

  const handleIncrement = () => {
    dispatch(incrementProductQuantity(cartProduct));
  }

  const handleDecrement = () => {
    dispatch(decrementProductQuantity(cartProduct));
  }


  return (
    <div className="Product Container col-12">
      <div className="Product-info">
        <Link to={`/products/${product.id}`} className='Product-info ml-3'>
          {name}
        </Link>
        <span>
          ${price}
        </span>
      </div>
      <div className="Product-btns">
        {
          cartProduct &&
          <span>
            {
              cartProduct.quantity === 1
                ? <Button className='mx-2' onClick={handleRemove}>
                  <i className="fa fa-trash"></i>
                </Button>
                : <Button className='mx-2' onClick={handleDecrement}>-</Button>
            }
            <span>{cartProduct.quantity}</span>
            <Button className='mx-2' onClick={handleIncrement}>+</Button>
          </span>
        }
        {
          cartProduct ?
            (
              < Button className='mx-2' onClick={handleIncrement}>Add to cart</Button>,
              < Button className='mx-2' onClick={handleRemove}>Remove from cart</Button>
            )
            :
            < Button className='mx-2' onClick={handleAdd}>Add to cart</Button>
        }
      </div>
    </div >
  );
}

export default Product;