import React from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import {
  addToCart,
  removeFromCart,
  incrementProductQuantity,
  decrementProductQuantity
} from "./actions";
import './ProductDetails.css';


function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartProduct = useSelector(st => st.cart.find(p => p.id === id));
  const inventoryProduct = useSelector(st => st.inventory.find(p => p.id === id));

  const { name, price, description, image_url } = inventoryProduct;

  const handleAdd = () => {
    dispatch(addToCart(inventoryProduct));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(inventoryProduct));
  };

  const handleIncrement = () => {
    dispatch(incrementProductQuantity(cartProduct));
  };

  const handleDecrement = () => {
    dispatch(decrementProductQuantity(cartProduct));
  };

  return (
    <Card className="ProductDetails col-md-6 offset-md-3 my-3">
      <CardImg className="ProductDetails-img" top width="80%" src={image_url} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>${price} </CardSubtitle>
        <CardText>{description}</CardText>

        <div className="ProductDetails-btns">
          {
            cartProduct &&
              <div className="btns-increment-decrement">
                {
                  cartProduct.quantity === 1
                    ? <Button className='mx-2' onClick={handleRemove}>
                      <i className="fa fa-trash"></i>
                    </Button>
                    : <Button className='mx-2' onClick={handleDecrement}>-</Button>
                }
                <span>{cartProduct.quantity}</span>
                <Button className='mx-2' onClick={handleIncrement}>+</Button>
              </div>
          }
          <div className="btns-add-remove">
            <Button className='mx-2' onClick={handleAdd}>Add to cart</Button>
            <Button className='mx-2' onClick={handleRemove}>Remove from cart</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductDetails;