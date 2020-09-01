import { SET_ADMIN } from "./actionTypes";
import { loginRequest } from "../api/api";

export const loginAction = (data) => {
  return async (dispatch) => {
    const response = await loginRequest(data);
    console.log(response?.data, "response");
    if (response.status === 200) {
      console.log(response.data.admin, "admin");
      dispatch({ type: SET_ADMIN });
    } else {
      dispatch({ type: SET_ADMIN, admin: {} });
    }
    return response.status === 200;
  };
};
