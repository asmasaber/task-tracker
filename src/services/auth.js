import {fetch} from "./fetch";
import {removeUser, loadUser} from "./localStorage";

export async function login(data) {
  const response = await fetch.post("/login", data);
  return response.json();
}

export async function signup(data) {
  const response = await fetch.post("/users", data);
  return response.json();
}

export function logout() {
  removeUser();
}

export function checkAuth() {
  return loadUser();
}
