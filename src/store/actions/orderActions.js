import { fetchOrders, fetchSingleOrder, fetchFilteredOrders } from "../api/api";
import {
  SET_ORDERS,
  SET_SINGLE_ORDER,
  SET_FILTERED_ORDERS,
  SET_SEARCH_VALUE,
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

export const filterOrdersAction = (sortType) => {
  return async (dispatch) => {
    const response = await fetchFilteredOrders(sortType);
    if (response?.data?.orders) {
      dispatch({
        type: SET_FILTERED_ORDERS,
        orders: response.data.orders,
      });
    } else {
      dispatch({
        type: SET_FILTERED_ORDERS,
        products: [],
      });
    }
  };
};
export const setSearchValueAction = (searchValue) => {
  return {
    type: SET_SEARCH_VALUE,
    searchValue,
  };
};
