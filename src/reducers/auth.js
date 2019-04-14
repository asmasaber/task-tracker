import {actions} from "../constants/actionTypes";
import {loadUser} from "../services/localStorage";
let user = loadUser();
const initialState = user ? {loggedIn: true, user} : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
  case actions.LOGIN_REQUEST:
    return {
      loggingIn: true,
      user: action.payload.user
    };
  case actions.LOGIN_SUCCESS:
    return {
      loggedIn: true,
      user: action.payload.user,
      token: action.payload.token
    };
  case actions.LOGIN_FAILURE:
    return {
      error: action.error
    };
  case actions.LOGOUT:
    return {};
  default:
    return state;
  }
}