import { products } from "./data";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const INITIAL_STATE = {
  inventory: products,
  cart: []
};

function rootReducer(state = INITIAL_STATE, action) {
  const product = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, product]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart].filter(p => p !== product)
      };

    default:
      console.warn(`this action type does not exist>>> ${action.type}`)
      return state;
  }
}


export default rootReducer;