import {combineReducers} from "redux";

import auth from "./auth";
import registration from "./registration";
import task from "./task";
const rootReducer = combineReducers({
  auth,
  registration,
  task
});

export default rootReducer;