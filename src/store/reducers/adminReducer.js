import { SET_ADMIN } from "../actions/actionTypes";

const initialState = { email: "", password: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN:
      return {
        ...action.admin,
      };

    default:
      return state;
  }
};
