import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import statsReducer from "./statsReducer";
import settingsReducer from "./settingsReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  admin: adminReducer,
  stats: statsReducer,
  order: orderReducer,
  settings: settingsReducer,
});
