import {createReducer,makeActionCreator} from "../../helpers";

export const types = {
  USER_TASKS_REQUEST: "USER_TASKS_REQUEST",
  USER_TASKS_SUCCESS: "USER_TASKS_SUCCESS",
  USER_TASKS_FAILURE: "USER_TASKS_FAILURE",

  CREATE_TASK_REQUEST: "CREATE_TASK_REQUEST",
  CREATE_TASK_SUCCESS: "CREATE_TASK_SUCCESS",
  CREATE_TASK_FAILURE: "CREATE_TASK_FAILURE",

  UPDATE_TASK_REQUEST: "UPDATE_TASK_REQUEST",
  UPDATE_TASK_SUCCESS: "UPDATE_TASK_SUCCESS",
  UPDATE_TASK_FAILURE: "UPDATE_TASK_FAILURE",

  DELETE_TASK_REQUEST: "DELETE_TASK_REQUEST",
  DELETE_TASK_SUCCESS: "DELETE_TASK_SUCCESS",
  DELETE_TASK_FAILURE: "DELETE_TASK_FAILURE",

  ENABLE_SEARCH_MODE: "ENABLE_SEARCH_MODE",
  DISABLE_SEARCH_MODE: "DISABLE_SEARCH_MODE",

  SEARCH_TASKS_REQUEST: "SEARCH_TASKS_REQUEST",
  SEARCH_TASKS_SUCCESS: "SEARCH_TASKS_SUCCESS",
  SEARCH_TASKS_FAILURE: "SEARCH_TASKS_FAILURE"
};

const initialState = {
  loadingTask: false,
  tasks: null,
  activeTask: null,
  error: null,
  creatingTask: false,
  createdTask: null,
  updatingTask: false,
  updatedTask: null,
  deletingTask: false,
  deletedTask: null,

  searchMode: false,

  loadingfiltiredTasks: false,
  searchInComplated: false,
  searchKey: null,
  filtiredTasks: null
};

const handlers = {
  [types.USER_TASKS_REQUEST]: state => ({...state, loadingTask: true}),
  [types.USER_TASKS_SUCCESS]: (state, action) => ({...state,
    loadingTask: false,
    tasks: action.payload.tasks}),
  [types.USER_TASKS_FAILURE]:  (state, action) => ({
    ...state,
    loadingTask: false,
    error: action.error
  }),
  [types.CREATE_TASK_REQUEST]: state => ({
    ...state,
    creatingTask: true
  }),
  [types.CREATE_TASK_SUCCESS]: (state, action) => ({
    ...state,
    creatingTask: false,
    createdTask: action.payload.createdTask
  }),
  [types.CREATE_TASK_FAILURE]: (state, action) => ({
    ...state,
    creatingTask: false,
    error: action.error
  }),
  [types.UPDATE_TASK_REQUEST]: state => ({
    ...state,
    updatingTask: true
  }),
  [types.UPDATE_TASK_SUCCESS]: (state, action) => ({
    ...state,
    updatingTask: false,
    updatedTask: action.payload.updatedTask
  }),
  [types.UPDATE_TASK_FAILURE]: (state, action) => ({
    ...state,
    updatingTask: false,
    error: action.error
  }),
  [types.DELETE_TASK_REQUEST]:(state, action) => ({
    ...state,
    activeTask: action.payload.activeTask,
    deletingTask: true
  }),
  [types.DELETE_TASK_SUCCESS]: state => ({
    ...state,
    deletingTask: false
  }),
  [types.DELETE_TASK_FAILURE]: (state, action) => ({
    ...state,
    deletingTask: false,
    error: action.error
  }),
  [types.ENABLE_SEARCH_MODE]: state => ({
    ...state,
    searchMode: true
  }),
  [types.DISABLE_SEARCH_MODE]: state => ({
    ...state,
    searchMode: false
  }),
  [types.SEARCH_TASKS_REQUEST]: (state, action) => ({
    ...state,
    loadingfiltiredTasks: true,
    searchKey: action.payload.searchKey,
    searchInComplated: action.payload.searchInComplated
  }),
  [types.SEARCH_TASKS_SUCCESS]: (state, action) => ({
    ...state,
    loadingfiltiredTasks: false,
    filtiredTasks: action.payload.tasks
  }),
  [types.SEARCH_TASKS_FAILURE]: (state, action) => ({
    ...state,
    loadingfiltiredTasks: false,
    error: action.error
  })
};

export default createReducer(initialState, handlers);

export const actions = {
  userTasksRequest: makeActionCreator(types.USER_TASKS_REQUEST),
  userTasksSuccess: makeActionCreator(types.USER_TASKS_SUCCESS, "tasks"),
  userTasksFailure: makeActionCreator(types.USER_TASKS_FAILURE, "error"),
  createTaskRequest: makeActionCreator(types.CREATE_TASK_REQUEST, "task"),
  createTaskSuccess: makeActionCreator(types.CREATE_TASK_SUCCESS, "createdTask"),
  createTaskFailure: makeActionCreator(types.CREATE_TASK_FAILURE, "error"),
  updateTaskRequest: makeActionCreator(types.UPDATE_TASK_REQUEST, "task"),
  updateTaskSuccess: makeActionCreator(types.UPDATE_TASKS_SUCCESS, "updatedTask"),
  updateTaskFailure: makeActionCreator(types.UPDATE_TASK_FAILURE, "error"),
  removeTaskRequest: makeActionCreator(types.DELETE_TASK_REQUEST, "activeTask"),
  removeTaskSuccess: makeActionCreator(types.DELETE_TASK_SUCCESS),
  removeTaskFailure: makeActionCreator(types.DELETE_TASK_FAILURE, "error"),

  enableSearchMode: makeActionCreator(types.ENABLE_SEARCH_MODE),
  disableSearchMode: makeActionCreator(types.DISABLE_SEARCH_MODE),

  searchTaskRequest:makeActionCreator(types.SEARCH_TASKS_REQUEST, "searchKey", "searchInComplated"),
  searchTaskSuccess: makeActionCreator(types.SEARCH_TASKS_SUCCESS,"tasks"),
  searchTaskFailure: makeActionCreator(types.SEARCH_TASKS_FAILURE, "error")
};
