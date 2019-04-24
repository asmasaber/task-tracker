import {put, call} from "redux-saga/effects";
import * as userService from "../../services/api";
import {history} from "../../helpers/history";
import {saveUser, removeUser} from "../../services/localStorage";
import {actions as authActions} from "../actions/auth";
import {actions as registrationActions} from "../actions/registration";


export function* login(action) {
  try {
    const {email, password} = action.payload.formValues;
    const responseBody = yield call(userService.login, {email, password});
    if (!responseBody.token) {
      throw new Error("Unable to find JWT in response body");
    }
    // update local storage
    saveUser({...action.payload.formValues, token: responseBody.token});
    yield put(authActions.loginSuccess(action.payload.formValues, responseBody.token));
    // redirect 
    history.pushState("/");
  }
  catch (e)
  {
    yield put(authActions.loginFailure(e.message));
  }
}

export function* signup(action) {
  try {
    const {name, email, password} = action.payload.formValues;
    yield call(userService.signup, {username: name, email, password});
    yield put(registrationActions.signupSuccess());
    // redirect 
    history.pushState("/login");
  }
  catch (e)
  {
    yield put(registrationActions.signupFailure(e.message));
  }
}

export function* logout() {
  yield removeUser();
}
