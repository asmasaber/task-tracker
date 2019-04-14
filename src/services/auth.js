import {post} from "./crud";
import {removeUser, loadUser} from "./localStorage";

export async function login(email, password) {
  const response = await post("/login", {
    email,
    password
  });
  return response.json();
}

export async function signup(username, email, password) {
  const response = await post("/users", {
    username,
    email,
    password
  });
  return response.json();
}

export function logout() {
  removeUser();
}

export function checkAuth() {
  return loadUser();
}
