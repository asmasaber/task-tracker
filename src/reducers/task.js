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

const initState = {
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
export default (state = initState, action) => {
  switch (action.type) {
  case types.USER_TASKS_REQUEST:
    return {
      ...state,
      loadingTask: true
    };
  case types.USER_TASKS_SUCCESS:
    return {
      ...state,
      loadingTask: false,
      tasks: action.payload.tasks
    };
  case types.USER_TASKS_FAILURE:
    return {
      ...state,
      loadingTask: false,
      error: action.error
    };
  case types.CREATE_TASK_REQUEST:
    return {
      ...state,
      creatingTask: true
    };
  case types.CREATE_TASK_SUCCESS:
    return {
      ...state,
      creatingTask: false,
      createdTask: action.payload.createdTask
    };
  case types.CREATE_TASK_FAILURE:
    return {
      ...state,
      creatingTask: false,
      error: action.error
    };
  case types.UPDATE_TASK_REQUEST:
    return {
      ...state,
      updatingTask: true
    };
  case types.UPDATE_TASK_SUCCESS:
    return {
      ...state,
      updatingTask: false,
      updatedTask: action.payload.updatedTask
    };
  case types.UPDATE_TASK_FAILURE:
    return {
      ...state,
      updatingTask: false,
      error: action.error
    };
  case types.DELETE_TASK_REQUEST:
    return {
      ...state,
      activeTask: action.payload.activeTask,
      deletingTask: true
    };
  case types.DELETE_TASK_SUCCESS:
    return {
      ...state,
      deletingTask: false
    };
  case types.DELETE_TASK_FAILURE:
    return {
      ...state,
      deletingTask: false,
      error: action.error
    };
  case types.ENABLE_SEARCH_MODE:
    return {
      ...state,
      searchMode: true
    };
  case types.DISABLE_SEARCH_MODE:
    return {
      ...state,
      searchMode: false
    };
  case types.SEARCH_TASKS_REQUEST:
    return {
      ...state,
      loadingfiltiredTasks: true,
      searchKey: action.payload.searchKey,
      searchInComplated: action.payload.searchInComplated
    };
  case types.SEARCH_TASKS_SUCCESS:
    return {
      ...state,
      loadingfiltiredTasks: false,
      filtiredTasks: action.payload.tasks
    };
  case types.SEARCH_TASKS_FAILURE:
    return {
      ...state,
      loadingfiltiredTasks: false,
      error: action.error
    };
  default:
    return state;
  }
};

export const actions = {
  userTasksRequest: () => ({ type: types.USER_TASKS_REQUEST }),
  userTasksSuccess: tasks => ({
    type: types.USER_TASKS_SUCCESS,
    payload: { tasks }
  }),
  userTasksFailure: error => ({ type: types.USER_TASKS_FAILURE, error }),

  createTaskRequest: task => ({
    type: types.CREATE_TASK_REQUEST,
    payload: { task }
  }),
  createTaskSuccess: createdTask => ({
    type: types.CREATE_TASK_SUCCESS,
    payload: { createdTask }
  }),
  createTaskFailure: error => ({ type: types.CREATE_TASK_FAILURE, error }),

  updateTaskRequest: task => ({
    type: types.UPDATE_TASK_REQUEST,
    payload: { task }
  }),
  updateTaskSuccess: updatedTask => ({
    type: types.UPDATE_TASKS_SUCCESS,
    payload: { updatedTask }
  }),
  updateTaskFailure: error => ({ type: types.UPDATE_TASK_FAILURE, error }),

  removeTaskRequest: activeTask => ({
    type: types.DELETE_TASK_REQUEST,
    payload: { activeTask }
  }),
  removeTaskSuccess: () => ({ type: types.DELETE_TASK_SUCCESS }),
  removeTaskFailure: error => ({ type: types.DELETE_TASK_FAILURE, error }),

  enableSearchMode: () => ({ type: types.ENABLE_SEARCH_MODE }),
  disableSearchMode: () => ({ type: types.DISABLE_SEARCH_MODE }),

  searchTaskRequest: (searchKey, searchInComplated) => ({
    type: types.SEARCH_TASKS_REQUEST,
    payload: { searchKey, searchInComplated }
  }),
  searchTaskSuccess: tasks => ({
    type: types.SEARCH_TASKS_SUCCESS,
    payload: { tasks }
  }),
  searchTaskFailure: error => ({ type: types.SEARCH_TASKS_FAILURE, error })
};
