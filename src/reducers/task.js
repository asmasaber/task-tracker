import {taskActions} from "../constants/actionTypes";
const initState = {
  loadingTask: false,
  tasks: [],
  error: "",
  creatingTask: false,
  createdTask: {},

}
export function task(state = initState, action) {
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
    case taskActions.UPDATE_TASK_REQUEST:
    return {
      updatingTask: true
    };
  case taskActions.UPDATE_TASKS_SUCCESS:
    return {
      updatingTask: false,
      updatedTask: action.payload.updatedTask
    };
  case taskActions.UPDATE_TASKS_FAILURE:
    return {
      updatingTask: false,
      error: action.error
    };
  case taskActions.DELETE_TASK_REQUEST:
    return {
      deletingTask: true
    };
  case taskActions.DELETE_TASKS_SUCCESS:
    return {
      deletingTask: false,
      deletedTask: action.payload.createdTask
    };
  case taskActions.DELETE_TASKS_FAILURE:
    return {
      deletingTask: false,
      error: action.error
    };
  default:
    return state;
  }
}