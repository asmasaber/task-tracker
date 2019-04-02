import { userService } from "../utils/services";
export const userActions = {
  login,
  logout,
  register
};

function login(email, password) {
  return dispatch => {
    dispatch({type: 'LOGIN_REQUEST',email});
   userService.login(email, password).then(
     user => {
       dispatch({type: 'LOGIN_SUCCESS',user})
     },
     error => {dispatch({type: 'LOGIN_FAILURE',error})}
   )
  } 
  
}

function logout(email, password) {
  userService.logout();
  return { type: "LOGOUT" };
}

function register(username, password) {}
