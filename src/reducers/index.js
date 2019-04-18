import {combineReducers} from "redux";

import {authentication} from "./auth";
import {registration} from "./registration";
import {task} from "./task";
const rootReducer = combineReducers({
  authentication,
  registration,
  task
});

export default rootReducer;