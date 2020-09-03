import { SET_ORDERS, SET_SINGLE_ORDER } from "../actions/actionTypes";

const initialState = {
  orders: [],
  single: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    case SET_SINGLE_ORDER:
      return { ...state, single: action.singleOrder };
    default:
      return state;
  }
};
