import {takeLatest, put, call} from "redux-saga/effects";
import * as userService from "../../services/api";
import {history} from "../../helpers/history";
import {saveUser, removeUser} from "../../services/localStorage";
import {actions as authActions, types as authTypes} from "../actions/auth";
import {actions as registrationActions, types as registrationTypes} from "../actions/registration";


function* login(action) {
  try {
    const {email, password} = action.payload;
    const responseBody = yield call(userService.login, {email, password});
    if (!responseBody.token) {
      throw new Error("Unable to find JWT in response body");
    }
    // update local storage
    saveUser({...action.payload, token: responseBody.token});
    yield put(authActions.loginSuccess({
      user: action.payload,
      token: responseBody.token
    }));
    // redirect 
    history.pushState("/");
  }
  catch (e)
  {
    yield put(
      {
        type: authActions.LOGIN_FAILURE,
        error: e.message
      }
    );
  }
}

function* signup(action) {
  try {
    const {name, email, password} = action.payload;
    yield call(userService.signup, {name, email, password});
    yield put(registrationActions.signupSuccess());
    // redirect 
    history.pushState("/login");
  }
  catch (e)
  {
    yield put(
      {
        type: authActions.REGISTER_FAILURE,
        error: e.message
      }
    );
  }
}

function* logout() {
  yield removeUser();
}

export const authSagas =[
  takeLatest(registrationTypes.REGISTER_REQUEST, signup),
  takeLatest(authTypes.LOGIN_REQUEST, login),
  takeLatest(authTypes.LOGOUT, logout)
];

