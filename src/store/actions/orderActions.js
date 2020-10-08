import {fetchOrders, fetchSingleOrder, fetchFilteredOrders, patchOrder} from "../api/api";
import {
  SET_ORDERS,
  SET_SINGLE_ORDER,
  SET_FILTERED_ORDERS,
  PATCH_SINGLE_ORDER,
} from "./actionTypes";
import { getAdminToken } from "../../utils/utils";

export const getOrdersAction = () => {
  return async (dispatch) => {
    const aToken = getAdminToken();
    const response = await fetchOrders(aToken);
    if (response.status === 200) {
      dispatch({ type: SET_ORDERS, orders: response.data });
    }
    return response.status === 200;
  };
};
export const getSingleOrderAction = (id) => {
  return async (dispatch) => {
    const aToken = getAdminToken();
    const response = await fetchSingleOrder(id, aToken);
    if (response.status === 200) {
      dispatch({ type: SET_SINGLE_ORDER, singleOrder: response.data });
    }
    return response.status === 200;
  };
};

export const filterOrdersAction = ({sort, status, from, to, search}) => {
  return async (dispatch) => {
    const response = await fetchFilteredOrders(sort, status, from, to, search);
    if (response?.data?.history) {
      dispatch({
        type: SET_FILTERED_ORDERS,
        filtered: response.data.history,
      });
    } else {
      dispatch({
        type: SET_FILTERED_ORDERS,
        filtered: [],
      });
    }
  };
};

export const patchSingleOrderAction = ({id, status}) => {
  return async (dispatch) => {
    const aToken = getAdminToken();
    const response = await patchOrder(id, status,aToken);
    if (response.status === 200) {
      dispatch({ type: PATCH_SINGLE_ORDER, singleOrder: response.data });
    }
    return response.status === 200;
  };
};