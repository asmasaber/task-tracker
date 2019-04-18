import {takeLatest, put, call, all} from "redux-saga/effects";
import {actions} from "../constants/actionTypes";
import * as userService from "../services/auth";
import {history} from "../helpers/history";
import {saveUser} from "../services/localStorage";

function* login(action) {
  try {
    const {email, password} = action.payload;
    const responseBody = yield call(userService.login, {email, password});
    if (!responseBody.token) {
      throw new Error("Unable to find JWT in response body");
    }
    // update local storage
    saveUser(action.payload);
    yield put(
      {
        type: actions.LOGIN_SUCCESS,
        payload: {
          user: action.payload,
          token: responseBody.token
        }
      }
    );
    // redirect 
    history.pushState("/");
  }
  catch (e)
  {
    yield put(
      {
        type: actions.LOGIN_FAILURE,
        error: e.message
      }
    );
  }
}

function* signup(action) {
  try {
    const {name, email, password} = action.payload;
    yield call(userService.signup, {name, email, password});
    yield put(
      {
        type: actions.REGISTER_SUCCESS
      }
    );
    // redirect 
    history.pushState("/login");
  }
  catch (e)
  {
    yield put(
      {
        type: actions.REGISTER_FAILURE,
        error: e.message
      }
    );
  }
}

function* logout() {
  yield userService.logout();
}

export default function *watchAll() {
  yield all([
    yield takeLatest(actions.REGISTER_REQUEST, signup),
    yield takeLatest(actions.LOGIN_REQUEST, login),
    yield takeLatest(actions.LOGOUT, logout)
  ]);
}
