import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_PRODUCT_QUANTITY,
  DECREMENT_PRODUCT_QUANTITY
} from "./actionTypes";

export function addToCart(product) {
  return { type: ADD_TO_CART, payload: product }
}

export function removeFromCart(product) {
  return { type: REMOVE_FROM_CART, payload: product }
}

export function incrementProductQuantity(product) {
  return { type: INCREMENT_PRODUCT_QUANTITY, payload: product }
}
export function decrementProductQuantity(product) {
  return { type: DECREMENT_PRODUCT_QUANTITY, payload: product }
}
