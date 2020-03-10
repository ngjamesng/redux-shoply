import React from "react";
import { useDispatch } from 'react-redux';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { addToCart, removeFromCart } from "./actions";


function Product({ product }){
  const {name, price, description, image_url} = product
  const dispatch = useDispatch();

  const handleAdd = () =>{
    dispatch(addToCart(product));
  }
  const handleRemove = () =>{
    dispatch(removeFromCart(product));
  }
  return (
    <Card>
    <CardImg top width="100%" src={image_url} alt={name} />
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>${price} </CardSubtitle>
      <CardText>{description}</CardText>
      <Button onClick={handleAdd}>Add to cart</Button>
      <Button onClick={handleRemove}>Remove from cart</Button>
    </CardBody>
  </Card>
  )
}

export default Product;