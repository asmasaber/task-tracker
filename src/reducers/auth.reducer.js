import { actionsConstant } from '../Constants/user.Constant'

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case actionsConstant.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case actionsConstant.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case actionsConstant.LOGIN_FAILURE:
      return {
        error: action.error
      };
    case actionsConstant.LOGOUT:
      return {};
    default:
      return state
  }
}