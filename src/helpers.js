import React from 'react';
import { Button } from "reactstrap";

function displayIncrementers(productQuantity) {

  const handleIncrement = () => {
    dispatch(incrementProductQuantity(cartProduct));
  }

  const handleDecrement = () => {
    dispatch(decrementProductQuantity(cartProduct));
  }

  return (
    <div className="btns-increment-decrement">
      <Button className='mx-2' onClick={handleDecrement}>-</Button>
      {/* <span>{cartProduct.quantity}</span> */}
      <Button className='mx-2' onClick={handleIncrement}>+</Button>
    </div>
  );
}

export { displayIncrementers };