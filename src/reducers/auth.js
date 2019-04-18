import {authActions} from "../constants/actionTypes";
import {loadUser} from "../services/localStorage";
let user = loadUser();
const initialState = user ? {loggedIn: true, user} : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
  case authActions.LOGIN_REQUEST:
    return {
      loggingIn: true,
      user: action.user
    };
  case authActions.LOGIN_SUCCESS:
    return {
      loggedIn: true,
      user: action.payload.user,
      token: action.payload.token
    };
  case authActions.LOGIN_FAILURE:
    return {
      error: action.error
    };
  case authActions.LOGOUT:
    return {};
  default:
    return state;
  }
}