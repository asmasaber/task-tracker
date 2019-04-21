import {taskActions} from "../constants/actionTypes";

export function getTasks() {
    return {
      type: taskActions.USER_TASKS_REQUEST
    }
}

export function create(task) {
  return {
    type: taskActions.CREATE_TASK_REQUEST,
    payload: {
      task
    }
  }
}

export function update(task) {
  return {
    type: taskActions.UPDATE_TASK_REQUEST,
    payload: {
      task
    }
  }
}

export function remove(task) {
  return {
    type: taskActions.DELETE_TASK_REQUEST,
    payload: {
      task
    }
  }
}