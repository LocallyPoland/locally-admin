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
  };
};

export const patchSettingsAction = () => {
  return async (dispatch) => {
    const aToken = getAdminToken();
    const response = await patchSettings(aToken);
    if (response.status === 200) {
      dispatch({ type: SET_SETTINGS, settings: response.data });
    }
  };
};
