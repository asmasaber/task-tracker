import {api} from "./fetch";

export function login(data) {
  return api.post("/login", data);
}

export function signup(data) {
  return api.post("/users", data);
}

export function getTasks() {
  return api.get("/todos");
}

export function createTask(task) {
  console.log("api >", task)
  return api.post("/todos", task);
}