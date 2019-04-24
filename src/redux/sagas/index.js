import {all, takeLatest} from "redux-saga/effects";

import {login, signup, logout} from "./auth";
import {getTasks, create, update, remove, search} from "./task";

import{types as authTypes} from "../actions/auth";
import{types as taskTypes} from "../actions/task";
import{types as registrationTypes} from "../actions/registration";

export default function* rootSaga() {
  yield all([
    takeLatest(registrationTypes.REGISTER_REQUEST, signup),
    takeLatest(authTypes.LOGIN_REQUEST, login),
    takeLatest(authTypes.LOGOUT, logout),

    takeLatest(taskTypes.USER_TASKS_REQUEST, getTasks),
    takeLatest(taskTypes.CREATE_TASK_REQUEST, create),
    takeLatest(taskTypes.UPDATE_TASK_REQUEST, update),
    takeLatest(taskTypes.DELETE_TASK_REQUEST, remove),
    takeLatest(taskTypes.SEARCH_TASKS_REQUEST, search),
  ]);
}