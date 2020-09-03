import { fetchStats, fetchUserStats } from "../api/api";
import { SET_STATS, SET_USER_STATS } from "./actionTypes";
import { getAdminToken } from "../../utils/utils";

export const getStatsAction = (data) => {
  return async (dispatch) => {
    const aToken = getAdminToken();
    const response = await fetchStats(aToken);
    if (response.status === 200) {
      dispatch({ type: SET_STATS, stats: response.data });
    }
    return response.status === 200;
  };
};
export const getUserStatsAction = (data) => {
  return async (dispatch) => {
    const aToken = getAdminToken();
    const response = await fetchUserStats(aToken);
    if (response.status === 200) {
      dispatch({ type: SET_USER_STATS, users: response.data });
    }
    return response.status === 200;
  };
};
