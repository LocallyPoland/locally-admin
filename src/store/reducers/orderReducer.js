import { SET_ORDERS } from "../actions/actionTypes";

const initialState = {
  orders: [],
  // single: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    default:
      return state;
  }
};