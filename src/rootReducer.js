import { products } from "./data";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_PRODUCT_QUANTITY,
  DECREMENT_PRODUCT_QUANTITY
} from "./actionTypes";

const inventory = Object.entries(products).map(p => (
  { ...p[1], id: p[0] }
));

const INITIAL_STATE = {
  inventory,
  cart: []
};

function rootReducer(state = INITIAL_STATE, action) {
  const product = action.payload;
  let updatedCart;

  switch (action.type) {
    case ADD_TO_CART:
      const newProduct = { ...product, quantity: 1 }
      return {
        ...state,
        cart: [...state.cart, newProduct]
      };

    case REMOVE_FROM_CART:
      console.log({product});
      return {
        ...state,
        cart: [...state.cart].filter(p => p.id !== product.id)
      };

    case INCREMENT_PRODUCT_QUANTITY:
      const incrementedProduct = { ...product, quantity: product.quantity + 1 };
      updatedCart = state.cart.map(p => (
        p.id !== product.id ? p : incrementedProduct
      ));

      return {
        ...state,
        cart: [...updatedCart]
      };

    case DECREMENT_PRODUCT_QUANTITY:
      const decrementedProduct = { ...product, quantity: product.quantity - 1 }
      updatedCart = state.cart.map(p => (
        p.id !== product.id ? p : decrementedProduct
      ));
      return {
        ...state,
        cart: [...updatedCart]
      };

    default:
      console.warn(`this action type does not exist>>> ${action.type}`)
      return state;
  }
}


export default rootReducer;