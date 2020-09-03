import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import statsReducer from "./statsReducer";
import settingsReducer from "./settingsReducer";

export default combineReducers({
  admin: adminReducer,
  stats: statsReducer,
  settings: settingsReducer,
});
