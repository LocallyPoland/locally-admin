import { SET_STATS } from "../actions/actionTypes";

const initialState = {
  data: {},
  months: [],
};

console.log("initial state ===", initialState);

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATS:
      return {
        ...state,
        ...action.stats,
      };
    default:
      return state;
  }
};
