import {actions} from "../constants/actionTypes";
export function login(formValues) {
    return {
      type: actions.LOGIN_REQUEST,
      payload: formValues
    }
};
  
export function signup(formValues) {
    return {
      type: actions.REGISTER_REQUEST,
      payload: formValues
    }
};
  