import {authActions} from "../constants/actionTypes";

export function registration(state = {}, action) {
  switch (action.type) {
  case authActions.REGISTER_REQUEST:
    return {registering: true};
  case authActions.REGISTER_SUCCESS:
    return {};
  case authActions.REGISTER_FAILURE:
    return {
      error: action.error
    };
  default:
    return state;
  }
}
