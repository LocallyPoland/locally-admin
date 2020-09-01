import { fetchSingleOrder, fetchActiveOrder } from "../api/api";
import { SET_ORDER, SET_SINGLE_ORDER } from "./actionTypes";

export const getActiveOrder = () => {
  return async (dispatch) => {
    const response = await fetchActiveOrder();
    if (response.status === 200) {
      dispatch({ type: SET_ORDER, order: response.data });
    }
  };
};

export const getSingleOrder = (id) => {
  return async (dispatch) => {
    const response = await fetchSingleOrder(id);
    dispatch({ type: SET_SINGLE_ORDER, singleOrder: response.data });
  };
};
