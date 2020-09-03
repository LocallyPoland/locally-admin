import { fetchStats } from "../api/api";
import { SET_STATS } from "./actionTypes";
import { getAdminToken } from "../../utils/utils";

export const getStatsAction = (data) => {
  return async (dispatch) => {
    const aToken = getAdminToken();
    const response = await fetchStats(aToken);
    if (response.status === 200) {
      dispatch({ type: SET_STATS, stats: response.data });
    }
  };
};
