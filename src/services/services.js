import { userApi } from "../utils/api";
import history from '../utils/history'

export const userService = {
  login,
  logout,
  register
};

function login(email, password) {
  return new Promise((resolve, reject) => {
    userApi
      .login(email, password)
      .then(user => {
        localStorage.setItem("user", JSON.stringify(user));
        // redirect to board 
        history.push('/');
        resolve(user);
      },
      error => {
        localStorage.setItem("user", JSON.stringify({}));
        reject(error);
      });
  });
}

function logout() {
  console.log('logout')
  localStorage.removeItem("user");
}

function register(user) {
  return new Promise((resolve, reject) => {
    userApi
      .register(user)
      .then(user => {
        localStorage.setItem("user", JSON.stringify(user));
        // redirect to board 
        history.push('/login');
        resolve(user);
      },
      error => {
        localStorage.setItem("user", JSON.stringify({}));
        reject(error);
      });
  });
}
