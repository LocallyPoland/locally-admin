import { SET_STATS } from "../actions/actionTypes";

const initialState = {
  deliveryPrice: "",
  deliveryStartTime: "",
  deliveryFinishTime: "",
  isChecked: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATS:
      return {
        ...state,
        deliveryPrice: action.deliveryPrice,
        deliveryStartTime: action.deliveryStartTime,
        deliveryFinishTime: action.deliveryFinishTime,
        isChecked: false,
      };
    default:
      return state;
  }
};
