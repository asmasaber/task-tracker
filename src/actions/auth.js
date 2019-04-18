import {authActions} from "../constants/actionTypes";

export function login(formValues) {
    return {
      type: authActions.LOGIN_REQUEST,
      payload: formValues
    }
};
  
export function signup(formValues) {
    return {
      type: authActions.REGISTER_REQUEST,
      payload: formValues
    }
};
