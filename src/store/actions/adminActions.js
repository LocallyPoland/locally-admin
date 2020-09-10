import { SET_ADMIN, LOGOUT } from "./actionTypes";
import { loginRequest } from "../api/api";

export const loginAction = (data) => {
  return async (dispatch) => {
    const response = await loginRequest(data);
    const { aToken } = response.data;
    console.log(response?.data, "response");
    if (response.status === 200) {
      // console.log(response.data.user, "user");
      document.cookie = `aToken=${aToken} `;
      dispatch({ type: SET_ADMIN, admin: { ...response.data.user } }); ///admin
    } else {
      dispatch({ type: SET_ADMIN, admin: {} });
    }
    // if (token) {
    //   return console.log("errooor");
    // }
    return response.status === 200;
  };
};
export const logoutAction = () => {
  document.cookie = "token=''; expires=Thu, 18 Dec 2013 12:00:00 UTC";
  document.cookie = "aToken=''; expires=Thu, 18 Dec 2013 12:00:00 UTC";
  // localStorage.removeItem("login");
  return {
    type: LOGOUT,
  };
};
