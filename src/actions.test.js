import {
  addToCart,
  removeFromCart,
  incrementProductQuantity,
  decrementProductQuantity
} from './actions'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_PRODUCT_QUANTITY,
  DECREMENT_PRODUCT_QUANTITY
} from "./actionTypes";

describe('Test action creators', () => {
  let product;

  beforeEach(() => {
    product = { test: 'test' }
  });

  it('should make sure each action creator properly returns actions', () => {
    expect(addToCart(product)).toEqual({ type: ADD_TO_CART, payload: product });
    expect(removeFromCart(product)).toEqual({ type: REMOVE_FROM_CART, payload: product });
    expect(incrementProductQuantity(product)).toEqual({ type: INCREMENT_PRODUCT_QUANTITY, payload: product });
    expect(decrementProductQuantity(product)).toEqual({ type: DECREMENT_PRODUCT_QUANTITY, payload: product });
  });

});