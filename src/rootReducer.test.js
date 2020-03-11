import rootReducer from './rootReducer';
import {
  addToCart,
  removeFromCart,
  incrementProductQuantity,
  decrementProductQuantity
} from './actions';

describe('Test root reducer cases', () => {
  let state;

  beforeEach(() => {
    state = {
      inventory: { id: 'test-inventory-id', name: "test inventory name" },
      cart: [{ id: 'test-cart-id', name: 'test cart name', quantity: 2 }]
    }
  });

  it('should add product to cart', () => {
    let product = state.inventory;
    let updatedState = rootReducer(state, addToCart(product))
    expect(updatedState.cart.length).toBe(2);
  });

  it('should remove product from cart', () => {
    let product = state.cart[0];
    console.log(product);
    let updatedState = rootReducer(state, removeFromCart(product))
    expect(updatedState.cart.length).toBe(0);
  });

  // it('should increase quantity of product by one', () => {
  //   let product = state.cart[0];
  //   let updatedState = rootReducer(state, incrementProductQuantity(product))
  //   expect(updatedState.cart[0].quantity).toBe(3);
  // });

  // it('should decrease quantity of produce by one', () => {
  //   let product = state.cart[0];
  //   let updatedState = rootReducer(state, decrementProductQuantity(product))
  //   expect(updatedState.cart[0].quantity).toBe(1);
  // });

});