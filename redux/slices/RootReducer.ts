import { combineReducers } from "redux";
import { LaunchReducer, AuthReducer } from ".";

const RootReducer = combineReducers({
  Auth: AuthReducer,
  Launch: LaunchReducer,
});

export default RootReducer;
