import { fetchSettings, patchSettings } from "../api/api";
import { SET_SETTINGS } from "./actionTypes";
import { getAdminToken } from "../../utils/utils";

export const getSettingsAction = () => {
  return async (dispatch) => {
    const aToken = getAdminToken();
    const response = await fetchSettings(aToken);
    if (response.status === 200) {
      dispatch({ type: SET_SETTINGS, settings: response.data });
    }
    return response.status === 200;
  };
};

export const patchSettingsAction = (data) => {
  return async (dispatch) => {
    const aToken = getAdminToken();
    const response = await patchSettings(aToken, data);
    if (response.status === 200) {
      dispatch({ type: SET_SETTINGS, settings: response.data });
    }
    return response.status === 200;
  };
};
