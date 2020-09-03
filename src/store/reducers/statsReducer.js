import { SET_STATS, SET_USER_STATS } from "../actions/actionTypes";

const initialState = {
  data: {},
  months: [],
  users: {},
};

console.log("initial state ===", initialState);

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATS:
      return {
        ...state,
        ...action.stats,
      };
    case SET_USER_STATS: {
      return {
        ...state,
        users: action.users,
      };
    }
    default:
      return state;
  }
};
