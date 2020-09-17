import { logRoles } from "@testing-library/react";
import { SET_SETTINGS } from "../actions/actionTypes";

const initialState = {
  price: "",
  priceForCustomer: "",
  switcher: [],
  timeStart: "",
  timeStop: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        price: action.settings.price,
        priceForCustomer: action.settings.priceForCustomer,
        timeStart: action.settings.timeStart,
        timeStop: action.settings.timeStop,
        switcher: action.settings.switcher,
      };
    default:
      return state;
  }
};
