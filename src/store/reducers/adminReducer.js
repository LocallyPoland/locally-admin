import { SET_ADMIN } from "../actions/actionTypes";

const initialState = { email: "", password: "", token: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN:
      return {
        ...state,
        email: action.admin.email,
        password: action.admin.password,
      };

    default:
      return state;
  }
};
