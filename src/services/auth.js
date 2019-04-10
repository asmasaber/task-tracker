import { userApi } from "../helpers/api";
import { history } from "../helpers/history";

export function login(email, password) {
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

export function logout() {
    localStorage.removeItem("user");
}

export function register(user) {
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

export function checkAuth() {
    return localStorage.getItem("user");
}
