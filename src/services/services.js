import { userApi } from "../utils/api";
import {history} from "../history";

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
                history.pushState("/");
                resolve(user);
            },
            error => {
                localStorage.setItem("user", JSON.stringify({}));
                reject(error);
            });
    });
}

function logout() {
    console.log('logot service')

    localStorage.removeItem("user");
}

function register(user) {
    return new Promise((resolve, reject) => {
        userApi
            .register(user)
            .then(user => {
                localStorage.setItem("user", JSON.stringify(user));
                // redirect to board 
                history.pushState("/login");
                resolve(user);
            },
            error => {
                localStorage.setItem("user", JSON.stringify({}));
                reject(error);
            });
    });
}
