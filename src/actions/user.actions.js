import { userService } from "../services/services";
import { actionsConstant } from "../Constants/user.Constant";
export const userActions = {
  login,
  logout,
  register
};

function login(email, password) {
  return dispatch => {
    dispatch(request(email));
    userService.login(email, password).then(
      user => {
        dispatch(seccess(user));
      },
      error => {
        dispatch(failur(error));
      }
    );
  };
  function request(email) {
    return { type: actionsConstant.LOGIN_REQUEST, email };
  }
  function seccess(user) {
    return { type: actionsConstant.LOGIN_SUCCESS, user };
  }
  function failur(error) {
    return { type: actionsConstant.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: actionsConstant.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user.email));
    userService.register(user).then(
      user => {
        dispatch(seccess(user));
      },
      error => {
        dispatch(failur(error));
      }
    );
  };
  function request(email) {
    return { type: actionsConstant.REGISTER_REQUEST, email };
  }
  function seccess(user) {
    return { type: actionsConstant.REGISTER_SUCCESS, user };
  }
  function failur(error) {
    return { type: actionsConstant.REGISTER_FAILURE, error };
  }
}
