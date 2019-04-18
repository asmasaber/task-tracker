import {taskActions} from "../constants/actionTypes";

export function task(state = {}, action) {
  switch (action.type) {
  case taskActions.USER_TASKS_REQUEST:
    return {
      loadingTask: true
    };
  case taskActions.USER_TASKS_SUCCESS:
    return {
      loadingTask: false,
      tasks: action.payload.tasks
    };
  case taskActions.USER_TASKS_FAILURE:
    return {
      loadingTask:false,
      tasks: [],
      error: action.error
    };
  case taskActions.CREATE_TASK_REQUEST:
    return {
      creatingTask: true
    };
  case taskActions.CREATE_TASKS_SUCCESS:
    return {
      creatingTask: false,
      createdTask: action.payload.createdTask
    };
  case taskActions.CREATE_TASKS_FAILURE:
    return {
      creatingTask: false,
      error: action.error
    };
  default:
    return state;
  }
}