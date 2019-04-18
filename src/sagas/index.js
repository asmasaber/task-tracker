import {all} from "redux-saga/effects";

import {authSagas} from "./auth";
import {taskSAgas} from "./task";

export default function* rootSaga() {
    console.log("root saga", authSagas)
    yield all([
        ...authSagas,
        ...taskSAgas
    ])
  }