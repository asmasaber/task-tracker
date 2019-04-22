import {api} from "./fetch";

export function login(data) {
  return api.post({endPoint: "/login", requestBody: data});
}

export function signup(data) {
  return api.post({endPoint: "/users", requestBody: data});
}

export function getTasks() {
  return api.get({endPoint: "/todos"});
}

export function createTask(task) {
  return api.post({endPoint: "/todos", requestBody: task});
}

export function updateTask(task) {
  return api.put({ endPoint: `/todos/${task._id}`, requestBody: task});
}

export function deleteTask(task) {
  return api.delete({endPoint: `/todos/${task._id}`});
}

export function search(searchkey, searchInComplated) {
  const params = {where : {
    title: searchkey,
    done: searchInComplated
  }};
  return api.get({endPoint: "/todos/", params});
}