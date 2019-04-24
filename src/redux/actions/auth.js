import { loadUser } from "../../services/localStorage";
import {createReducer,makeActionCreator} from "../../helpers";

export const types = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",

  CHECK_AUTH: "CHECK_AUTH",
  LOGOUT: "LOGOUT",
};
const user = loadUser();

const initialState = user
  ? { loggedIn: true, user, token: user.token, error: null }
  : { loggedIn: false, user: null, token: null, error:null };

const handlers = {
  [types.LOGIN_REQUEST]: state => ({
    ...state,
    error: null,
    loggingIn: true
  }),
  [types.LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    loggedIn: true,
    user: action.payload.user,
    token: action.payload.token
  }),
  [types.LOGIN_FAILURE]: (state, action) => ({
    ...state,
    loggingIn: false,
    error: action.error
  }),
  [types.LOGOUT]: state => ({ ...state })
};

export default createReducer(initialState, handlers);

export const actions = {
  loginRequest: makeActionCreator(types.LOGIN_REQUEST, "formValues"),
  loginSuccess: makeActionCreator(types.LOGIN_SUCCESS, "user", "token"),
  loginFailure: makeActionCreator(types.LOGIN_FAILURE, "error"),
  logout: makeActionCreator(types.LOGOUT),
};

