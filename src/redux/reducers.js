// src/redux/reducers.js
const initialState = {
    products: [],
    myCart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
      case 'ADD_TO_CART':
        return {
          ...state,
          myCart: state.myCart.some((item) => item.id === action.payload.id)
            ? state.myCart
            : [...state.myCart, action.payload],
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          myCart: state.myCart.filter((item) => item.id !== action.payload),
        };
      case 'CHECKOUT':
        return {
          ...state,
          myCart: [],
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  