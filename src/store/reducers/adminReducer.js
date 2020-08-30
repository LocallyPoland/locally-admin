import SET_ACTIVE_ORDERS from "../actions/actionTypes";

const initialState = { orders: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_ORDERS:
      return {
        orders: action.orders,
      };

    default:
      return state;
  }
};
