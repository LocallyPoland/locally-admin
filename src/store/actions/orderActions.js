import {fetchOrders, fetchSingleOrder} from "../api/api";
import {SET_ORDERS, SET_SINGLE_ORDER} from "./actionTypes";
import {getAdminToken} from "../../utils/utils";

export const getOrdersAction = () => {
    return async (dispatch) => {
        const aToken = getAdminToken();
        const response = await fetchOrders(aToken);
        if (response.status === 200) {
            dispatch({type: SET_ORDERS, orders: response.data});
        }
        return response.status === 200;
    };
};
export const getSingleOrderAction = (id) => {
    return async (dispatch) => {
        const aToken = getAdminToken();
        const response = await fetchSingleOrder(id, aToken);
        console.log(response.data)
        if (response.status === 200) {
            dispatch({type: SET_SINGLE_ORDER, singleOrder: response.data});
        }
        return response.status === 200;
    };
};
