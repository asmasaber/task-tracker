import { combineReducers } from "redux";

import {authentication} from "./auth";
import {registration} from "./registration";
const rootReducer = combineReducers({
    authentication,
    registration
});

export default rootReducer;