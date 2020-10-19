import {
    PATCH_SINGLE_ORDER,
    SET_FILTERED_ORDERS,
    SET_ORDERS,
    SET_SEARCH_VALUE,
    SET_SINGLE_ORDER,
    // SHOW_NOTIFICATION,
} from "../actions/actionTypes";

const initialState = {
    orders: [],
    singleOrder: {},
    filtered: [],
    searchValue: "",
    phone: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state,
                orders: action.orders,
            };
        case SET_SINGLE_ORDER:
            return { ...state, singleOrder: action.singleOrder };
        case PATCH_SINGLE_ORDER:
            return { ...state, singleOrder: action.singleOrder };
        case SET_FILTERED_ORDERS:
            return {
                ...state,
                filtered: action.filtered,
            };
        default:
            return state;
    }
};
