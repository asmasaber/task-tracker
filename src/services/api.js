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
  return api.post("/todos", task);
}

export function updateTask(task) {
  return api.put(`/todos/${task._id}`, task);
}

export function deleteTask(task) {
  console.log("delete api ")
  return api.delete(`/todos/${task._id}`);
}