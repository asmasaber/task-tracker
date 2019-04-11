// import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";
import { actionsConstant } from "../constants/actionTypes";

import * as userService from "../services/auth";

function* logoutAsync() {
    // yield delay(4000);
    yield userService.logout();
}

function* loginAsync() {
    yield put(actionsConstant.LOGIN_REQUEST);
    const user = userService.login();
    if(user)
        yield put(actionsConstant.LOGIN_SUCCESS, user);
    else
        yield put(actionsConstant.LOGIN_FAILURE);
}

export function* watchLogout() {
    yield takeLatest(actionsConstant.LOGOUT, logoutAsync);
}

export function* watchLogin() {
    yield takeLatest(actionsConstant.LOGOUT, loginAsync);
}