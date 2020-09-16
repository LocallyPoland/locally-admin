import {
  SET_FILTERED_ORDERS,
  SET_ORDERS,
  SET_SEARCH_VALUE,
  SET_SINGLE_ORDER,
} from "../actions/actionTypes";

const initialState = {
  orders: [],
  singleOrder: {},
  filtered: [],
  searchValue: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
        filtered: action.orders,
      };
    case SET_SINGLE_ORDER:
      return { ...state, singleOrder: action.singleOrder };
    case SET_FILTERED_ORDERS:
      return {
        ...state,
        filtered: action.orders,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
      };
    default:
      return state;
  }
};
